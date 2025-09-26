"use client"

import cx from "classnames"
import { useRef, useEffect, useState, useCallback, memo } from "react"
import { toast } from "sonner"
import { useLocalStorage, useWindowSize } from "usehooks-ts"

import { sanitizeUIMessages } from "@/lib/utils"

import { ArrowUpIcon, PaperclipIcon, StopIcon } from "./icons"
import { PreviewAttachment } from "./preview-attachment"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { SuggestedActions } from "./suggested-actions"
import equal from "fast-deep-equal"

function PureMultimodalInput({ chatId, input = '', setInput, isLoading, stop, attachments = [], setAttachments, messages = [], setMessages, append, handleSubmit, className }) {
  const textareaRef = useRef(null)
  const { width } = useWindowSize()

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight()
    }
  }, [])

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 2}px`
    }
  }

  const resetHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = "98px"
    }
  }

  const [localStorageInput, setLocalStorageInput] = useLocalStorage("input", "")

  useEffect(() => {
    if (textareaRef.current && setInput) {
      const domValue = textareaRef.current.value
      // Prefer DOM value over localStorage to handle hydration
      const finalValue = domValue || localStorageInput || ""
      setInput(finalValue)
      adjustHeight()
    }
    // Only run once after hydration
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setLocalStorageInput(input)
  }, [input, setLocalStorageInput])

  const handleInput = (event) => {
    if (setInput) {
      setInput(event.target.value)
    }
    adjustHeight()
  }

  const fileInputRef = useRef(null)
  const [uploadQueue, setUploadQueue] = useState([])

  const submitForm = useCallback(() => {
    // window.history.replaceState({}, "", `/chat?id=${chatId}`)

    if (handleSubmit) {
      handleSubmit(undefined, {
        experimental_attachments: attachments,
      })
    }

    if (setAttachments) {
      setAttachments([])
    }
    setLocalStorageInput("")
    resetHeight()

    if (width && width > 768) {
      textareaRef.current?.focus()
    }
  }, [attachments, handleSubmit, setAttachments, setLocalStorageInput, width])

  const uploadFile = async (file) => {
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/files/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        const { url, pathname, contentType } = data

        return {
          url,
          name: pathname,
          contentType: contentType,
        }
      }
      const { error } = await response.json()
      toast.error(error)
    } catch (error) {
      toast.error("Failed to upload file, please try again!")
    }
  }

  const handleFileChange = useCallback(
    async (event) => {
      const files = Array.from(event.target.files || [])

      setUploadQueue(files.map((file) => file.name))

      try {
        const uploadPromises = files.map((file) => uploadFile(file))
        const uploadedAttachments = await Promise.all(uploadPromises)
        const successfullyUploadedAttachments = uploadedAttachments.filter((attachment) => attachment !== undefined)

        setAttachments((currentAttachments) => [...currentAttachments, ...successfullyUploadedAttachments])
      } catch (error) {
        console.error("Error uploading files!", error)
      } finally {
        setUploadQueue([])
      }
    },
    [setAttachments]
  )

  return (
    <div className="relative w-full flex flex-col gap-4">
      {messages.length === 0 && attachments.length === 0 && uploadQueue.length === 0 && <SuggestedActions append={append} chatId={chatId} />}

      <input type="file" className="fixed -top-4 -left-4 size-0.5 opacity-0 pointer-events-none" ref={fileInputRef} multiple onChange={handleFileChange} tabIndex={-1} />

      {(attachments.length > 0 || uploadQueue.length > 0) && (
        <div className="flex flex-row gap-2 overflow-x-scroll items-end">
          {attachments.map((attachment) => (
            <PreviewAttachment key={attachment.url} attachment={attachment} />
          ))}

          {uploadQueue.map((filename) => (
            <PreviewAttachment
              key={filename}
              attachment={{
                url: "",
                name: filename,
                contentType: "",
              }}
              isUploading={true}
            />
          ))}
        </div>
      )}

      <div className="bg-token-bg-primary cursor-text overflow-clip bg-clip-padding p-2.5 contain-inline-size dark:bg-[#303030] grid grid-cols-[auto_1fr_auto] [grid-template-areas:'header_header_header'_'leading_primary_trailing'_'._footer_.'] group-data-expanded/composer:[grid-template-areas:'header_header_header'_'primary_primary_primary'_'leading_footer_trailing'] shadow-short" style={{borderRadius: '28px'}}>
        <div className="-my-2.5 flex min-h-14 items-center overflow-x-hidden px-1.5 [grid-area:primary] group-data-expanded/composer:mb-0 group-data-expanded/composer:px-2.5">
          <div className="_prosemirror-parent_4ajk2_2 text-token-text-primary max-h-[max(35svh,5rem)] flex-1 overflow-auto [scrollbar-width:thin] default-browser vertical-scroll-fade-mask">
            <Textarea
              ref={textareaRef}
              placeholder="Ask anything"
              value={input}
              onChange={handleInput}
              className={cx("min-h-[24px] max-h-[calc(35svh)] overflow-hidden resize-none border-0 bg-transparent !text-base focus:ring-0 focus:outline-none", className)}
              rows={1}
              autoFocus
              style={{display: 'block'}}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault()

                  if (isLoading) {
                    toast.error("Please wait for the model to finish its response!")
                  } else {
                    submitForm()
                  }
                }
              }}
            />
          </div>
        </div>
        
        <div className="[grid-area:leading]">
          <span className="flex" data-state="closed">
            <AttachmentsButton fileInputRef={fileInputRef} isLoading={isLoading} />
          </span>
        </div>
        
        <div className="flex items-center gap-2 [grid-area:trailing]">
          <div className="ms-auto flex items-center gap-1.5">
            <span className="" data-state="closed">
              <button aria-label="Dictate button" type="button" className="composer-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="" className="icon" fontSize="inherit">
                  <path d="M15.7806 10.1963C16.1326 10.3011 16.3336 10.6714 16.2288 11.0234L16.1487 11.2725C15.3429 13.6262 13.2236 15.3697 10.6644 15.6299L10.6653 16.835H12.0833L12.2171 16.8486C12.5202 16.9106 12.7484 17.1786 12.7484 17.5C12.7484 17.8214 12.5202 18.0894 12.2171 18.1514L12.0833 18.165H7.91632C7.5492 18.1649 7.25128 17.8672 7.25128 17.5C7.25128 17.1328 7.5492 16.8351 7.91632 16.835H9.33527L9.33429 15.6299C6.775 15.3697 4.6558 13.6262 3.84992 11.2725L3.76984 11.0234L3.74445 10.8906C3.71751 10.5825 3.91011 10.2879 4.21808 10.1963C4.52615 10.1047 4.84769 10.2466 4.99347 10.5195L5.04523 10.6436L5.10871 10.8418C5.8047 12.8745 7.73211 14.335 9.99933 14.335C12.3396 14.3349 14.3179 12.7789 14.9534 10.6436L15.0052 10.5195C15.151 10.2466 15.4725 10.1046 15.7806 10.1963ZM12.2513 5.41699C12.2513 4.17354 11.2437 3.16521 10.0003 3.16504C8.75675 3.16504 7.74835 4.17343 7.74835 5.41699V9.16699C7.74853 10.4104 8.75685 11.418 10.0003 11.418C11.2436 11.4178 12.2511 10.4103 12.2513 9.16699V5.41699ZM13.5814 9.16699C13.5812 11.1448 11.9781 12.7479 10.0003 12.748C8.02232 12.748 6.41845 11.1449 6.41828 9.16699V5.41699C6.41828 3.43889 8.02221 1.83496 10.0003 1.83496C11.9783 1.83514 13.5814 3.439 13.5814 5.41699V9.16699Z" />
                </svg>
              </button>
            </span>
            <div className="min-w-9" data-testid="composer-speech-button-container">
              <span className="" data-state="closed">
                <button
                  data-testid="composer-speech-button"
                  aria-label="Start voice mode"
                  className="relative flex h-9 items-center justify-center rounded-full disabled:text-gray-50 disabled:opacity-30 w-9 composer-secondary-button-color hover:opacity-80"
                  style={{viewTransitionName: 'var(--vt-composer-speech-button)'}}
                >
                  <div className="flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="icon">
                      <path d="M7.167 15.416V4.583a.75.75 0 0 1 1.5 0v10.833a.75.75 0 0 1-1.5 0Zm4.166-2.5V7.083a.75.75 0 0 1 1.5 0v5.833a.75.75 0 0 1-1.5 0ZM3 11.25V8.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0Zm12.5 0V8.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0Z" />
                    </svg>
                  </div>
                </button>
              </span>
            </div>
            {isLoading ? <StopButton stop={stop} setMessages={setMessages} /> : <SendButton input={input} submitForm={submitForm} uploadQueue={uploadQueue} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export const MultimodalInput = memo(PureMultimodalInput, (prevProps, nextProps) => {
  if (prevProps.input !== nextProps.input) return false
  if (prevProps.isLoading !== nextProps.isLoading) return false
  if (!equal(prevProps.attachments, nextProps.attachments)) return false

  return true
})

function PureAttachmentsButton({ fileInputRef, isLoading }) {
  return (
    <button
      type="button"
      className="composer-btn"
      data-testid="composer-plus-btn"
      aria-label="Add files and more"
      id="composer-plus-btn"
      aria-haspopup="menu"
      aria-expanded="false"
      data-state="closed"
      onClick={(event) => {
        event.preventDefault()
        fileInputRef.current?.click()
      }}
      disabled={isLoading}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="icon">
        <path d="M9.33496 16.5V10.665H3.5C3.13273 10.665 2.83496 10.3673 2.83496 10C2.83496 9.63273 3.13273 9.33496 3.5 9.33496H9.33496V3.5C9.33496 3.13273 9.63273 2.83496 10 2.83496C10.3673 2.83496 10.665 3.13273 10.665 3.5V9.33496H16.5L16.6338 9.34863C16.9369 9.41057 17.165 9.67857 17.165 10C17.165 10.3214 16.9369 10.5894 16.6338 10.6514L16.5 10.665H10.665V16.5C10.665 16.8673 10.3673 17.165 10 17.165C9.63273 17.165 9.33496 16.8673 9.33496 16.5Z" />
      </svg>
    </button>
  )
}

const AttachmentsButton = memo(PureAttachmentsButton)

function PureStopButton({ stop, setMessages }) {
  return (
    <button
      className="rounded-full p-1.5 h-fit border dark:border-zinc-600 bg-token-surface-primary hover:bg-token-surface-secondary"
      onClick={(event) => {
        event.preventDefault()
        stop()
        setMessages((messages) => sanitizeUIMessages(messages))
      }}
    >
      <StopIcon size={14} />
    </button>
  )
}

const StopButton = memo(PureStopButton)

function PureSendButton({ submitForm, input, uploadQueue }) {
  if (!input) {
    return (
      <button className="rounded-full p-1.5 h-fit border dark:border-zinc-600 opacity-50 cursor-not-allowed bg-token-surface-primary" disabled>
        <ArrowUpIcon size={14} />
      </button>
    )
  }

  return (
    <button
      className="rounded-full p-1.5 h-fit border dark:border-zinc-600 bg-token-main-surface-primary hover:bg-token-main-surface-secondary text-white"
      onClick={(event) => {
        event.preventDefault()
        submitForm()
      }}
      disabled={input.length === 0 || uploadQueue.length > 0}
    >
      <ArrowUpIcon size={14} />
    </button>
  )
}

const SendButton = memo(PureSendButton, (prevProps, nextProps) => {
  if (prevProps.uploadQueue.length !== nextProps.uploadQueue.length) return false
  if (prevProps.input !== nextProps.input) return false
  return true
})
