"use client"

import { useChat } from "@ai-sdk/react"
import { useState } from "react"
import useSWR, { useSWRConfig } from "swr"

import { fetcher, generateUUID } from "@/lib/utils"

import { Artifact } from "./artifact"
import { MultimodalInput } from "./multimodal-input"
import { Messages } from "./messages"
import { VisibilityType } from "./visibility-selector"
import { useArtifactSelector } from "@/utils/hooks/use-artifact"
import { toast } from "sonner"
import { ChatHeader } from "@/components/chat-header"
import { apiFetcherData } from "@/utils/fetcher"
import { API_ENDPOINT } from "@/config/constants"

// {
//   id: string;
//   initialMessages: Array<Message>;
//   selectedChatModel: string;
//   selectedVisibilityType: VisibilityType;
//   isReadonly: boolean;
// }
export function Chat({ id, initialMessages, selectedChatModel, selectedVisibilityType, isReadonly }) {
  const { mutate } = useSWRConfig()
  // messages: JSON.stringify(initialMessages), 
  const { messages, setMessages, handleSubmit, input, setInput, append, isLoading, stop, reload } = useChat({
    api: `${API_ENDPOINT}/chat/${id}`,
    id,
    body: { id:id, selectedChatModel:selectedChatModel },
    initialMessages,
    credentials: "include",
    experimental_throttle: 100,
    sendExtraMessageFields: true,
    generateId: generateUUID,
    onFinish: () => {
      mutate(`${API_ENDPOINT}/history`)
    },
    onError: (error) => {
      toast.error("An error occured, please try again!")
    },
  })

  // console.log("id", id)

  // const { data: votes } = useSWR(`/api/vote?chatId=${id}`, apiFetcherData)
  const votes = []

  const [attachments, setAttachments] = useState([])
  const isArtifactVisible = useArtifactSelector((state) => state.isVisible)
  return (
    <>
      <main
        className="transition-width relative h-full w-full flex-1 overflow-auto -translate-y-[calc(env(safe-area-inset-bottom,0px)/2)] pt-[calc(env(safe-area-inset-bottom,0px)/2)]"
        id="main"
        style={{zIndex: -1}}
      >
        <div id="thread" className="group/thread @container/thread h-full w-full">
          <div role="presentation" className="composer-parent flex flex-col focus-visible:outline-0 overflow-hidden h-full">
            {/* Header */}
            <header 
              id="millionscope-header"
              className="draggable no-draggable-children top-0 p-2 touch:p-2.5 flex items-center justify-between z-20 h-header-height pointer-events-none select-none [view-transition-name:var(--vt-page-header)] *:pointer-events-auto motion-safe:transition max-md:hidden absolute start-0 end-0 thread-xl:absolute thread-xl:start-0 thread-xl:end-0 thread-xl:shadow-none! thread-xl:bg-transparent bg-transparent [box-shadow:var(--sharp-edge-top-shadow-placeholder)]"
            >
              <div className="absolute start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2">
                <button className="flex items-center gap-1 rounded-full py-2 ps-2.5 pe-3 text-sm font-medium bg-[#F1F1FB] text-[#5D5BD0] hover:bg-[#E4E4F6] dark:bg-[#373669] dark:text-[#DCDBF6] dark:hover:bg-[#414071]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="icon-sm w-4 h-4">
                    <path d="M10 2L13.09 8.26L20 9L15 13.74L16.18 20.5L10 17L3.82 20.5L5 13.74L0 9L6.91 8.26L10 2Z"/>
                  </svg>
                  MillionScope Plus
                </button>
              </div>
              <div className="flex items-center">
                <button 
                  aria-label="Model selector, current model selection"
                  type="button" 
                  id="millionscope-model-selector" 
                  aria-haspopup="menu" 
                  aria-expanded="false"
                  data-state="closed" 
                  data-testid="model-switcher-dropdown-button"
                  className="group flex cursor-pointer justify-center items-center gap-1 rounded-lg min-h-9 touch:min-h-10 px-2.5 text-lg hover:bg-token-surface-hover focus-visible:bg-token-surface-hover font-normal whitespace-nowrap focus-visible:outline-none"
                  style={{viewTransitionName: 'var(--vt-thread-model-switcher)'}}
                >
                  <div>MillionScope</div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="icon-sm text-token-text-tertiary">
                    <path d="M12.1338 5.94433C12.3919 5.77382 12.7434 5.80202 12.9707 6.02929C13.1979 6.25656 13.2261 6.60807 13.0556 6.8662L12.9707 6.9707L8.47067 11.4707C8.21097 11.7304 7.78896 11.7304 7.52926 11.4707L3.02926 6.9707L2.9443 6.8662C2.77379 6.60807 2.80199 6.25656 3.02926 6.02929C3.25653 5.80202 3.60804 5.77382 3.86617 5.94433L3.97067 6.02929L7.99996 10.0586L12.0293 6.02929L12.1338 5.94433Z" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center">
                <div className="flex items-center" id="conversation-header-actions">
                  <div className="flex items-center">
                    <span className="" data-state="closed">
                      <button className="text-token-text-primary no-draggable hover:bg-token-surface-hover keyboard-focused:bg-token-surface-hover touch:h-10 touch:w-10 flex h-9 w-9 items-center justify-center rounded-lg focus:outline-none disabled:opacity-50 rounded-full!" aria-label="Turn on temporary chat">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-rtl-flip="" className="icon">
                          <path d="M4.52148 15.1664C4.61337 14.8108 4.39951 14.4478 4.04395 14.3559C3.73281 14.2756 3.41605 14.4295 3.28027 14.7074L3.2334 14.8334C3.13026 15.2324 3.0046 15.6297 2.86133 16.0287L2.71289 16.4281C2.63179 16.6393 2.66312 16.8775 2.79688 17.06C2.93067 17.2424 3.14825 17.3443 3.37402 17.3305L3.7793 17.3002C4.62726 17.2265 5.44049 17.0856 6.23438 16.8764C6.84665 17.1788 7.50422 17.4101 8.19434 17.558C8.55329 17.6348 8.9064 17.4062 8.9834 17.0473C9.06036 16.6882 8.83177 16.3342 8.47266 16.2572C7.81451 16.1162 7.19288 15.8862 6.62305 15.5815C6.50913 15.5206 6.38084 15.4946 6.25391 15.5053L6.12793 15.5277C5.53715 15.6955 4.93256 15.819 4.30566 15.9027C4.33677 15.8053 4.36932 15.7081 4.39844 15.6098L4.52148 15.1664Z" />
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </header>

            {/* Main content area */}
            <div className="relative basis-auto flex-col shrink flex flex-col justify-end max-sm:grow max-sm:justify-center sm:min-h-[42svh]">
              {messages.length === 0 ? (
                <div className="flex justify-center">
                  <div className="mb-7 hidden text-center sm:block">
                    <div className="relative inline-flex justify-center text-center text-2xl leading-9 font-semibold">
                      <div>
                        <div className="grid-cols-1 items-center justify-end" style={{viewTransitionName: 'var(--vt-splash-screen-headline)'}}>
                          <h1 className="text-page-header inline-flex min-h-10.5 items-baseline whitespace-pre-wrap opacity-100" aria-hidden="false" style={{transform: 'translateY(0px)'}}>
                            <div className="px-1 text-pretty whitespace-pre-wrap">What&apos;s your million-scope perspective today?</div>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-token-text-primary mt-[var(--screen-optical-compact-offset-amount)] [display:var(--display-hidden-until-loaded,flex)] w-full shrink flex-col items-center justify-center px-4 transition-opacity sm:hidden h-full opacity-100">
                    <div className="relative inline-flex justify-center text-center text-2xl leading-9 font-semibold">
                      <div>
                        <div className="grid-cols-1 items-center justify-end" style={{viewTransitionName: 'var(--vt-splash-screen-headline)'}}>
                          <h1 className="text-page-header inline-flex min-h-10.5 items-baseline whitespace-pre-wrap opacity-100" aria-hidden="false" style={{transform: 'translateY(0px)'}}>
                            <div className="px-1 text-pretty whitespace-pre-wrap">What&apos;s your million-scope perspective today?</div>
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="" style={{opacity: 1}}></div>
                  </div>
                </div>
              ) : (
                <Messages
                  chatId={id}
                  isLoading={isLoading}
                  votes={votes}
                  messages={messages}
                  setMessages={setMessages}
                  reload={reload}
                  isReadonly={isReadonly}
                  isArtifactVisible={isArtifactVisible}
                />
              )}
            </div>

            {/* Input area */}
            <div id="thread-bottom-container" className="group/thread-bottom-container relative isolate z-10 w-full basis-auto has-data-has-thread-error:pt-2 has-data-has-thread-error:[box-shadow:var(--sharp-edge-bottom-shadow)] md:border-transparent md:pt-0 dark:border-white/20 md:dark:border-transparent single-line min-h-0 mb-4 sm:grow flex flex-col">
              <div id="thread-bottom">
                <div className="text-base mx-auto [--thread-content-margin:--spacing(4)] thread-sm:[--thread-content-margin:--spacing(6)] thread-lg:[--thread-content-margin:--spacing(16)] px-(--thread-content-margin)">
                  <div className="[--thread-content-max-width:40rem] thread-lg:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1">
                    <div className="flex justify-center empty:hidden"></div>
                    <div className="relative z-1 flex h-[var(--composer-container-height,100%)] max-w-full flex-[var(--composer-container-flex,1)] flex-col">
                      {!isReadonly && (
                        <form className="group/composer w-full" style={{viewTransitionName: 'var(--vt-composer)'}} data-type="unified-composer">
                          <MultimodalInput
                            chatId={id}
                            input={input}
                            setInput={setInput}
                            handleSubmit={handleSubmit}
                            isLoading={isLoading}
                            stop={stop}
                            attachments={attachments}
                            setAttachments={setAttachments}
                            messages={messages}
                            setMessages={setMessages}
                            append={append}
                          />
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-base mx-auto [--thread-content-margin:--spacing(4)] thread-sm:[--thread-content-margin:--spacing(6)] thread-lg:[--thread-content-margin:--spacing(16)] px-(--thread-content-margin)">
                  <div className="[--thread-content-max-width:40rem] thread-lg:[--thread-content-max-width:48rem] mx-auto max-w-(--thread-content-max-width) flex-1">
                    <div className="max-w-full max-sm:hidden min-h-[108px] h-[70px]" style={{opacity: 1}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <Artifact
        chatId={id}
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        stop={stop}
        attachments={attachments}
        setAttachments={setAttachments}
        append={append}
        messages={messages}
        setMessages={setMessages}
        reload={reload}
        votes={votes}
        isReadonly={isReadonly}
      /> */}
    </>
  )
}
