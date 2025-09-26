"use client"

import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/contexts/auth"

export function LandingPage() {
  const { user } = useAuth()

  if (user) {
    return null // Don't show landing page if user is logged in
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="relative flex h-full w-full flex-1 transition-colors z-0">
        <div className="relative flex h-full w-full flex-row">
          <div className="relative flex h-full max-w-full flex-1 flex-col">
            {/* Mobile Header */}
            <div className="draggable h-header-height bg-token-bg-primary sticky top-0 z-10 flex items-center border-transparent px-2 md:hidden [box-shadow:var(--sharp-edge-top-shadow-placeholder)]">
              <div className="no-draggable flex items-center justify-center">
                <span className="flex" data-state="closed">
                  <Link
                    aria-label="New chat"
                    className="text-token-text-primary no-draggable hover:bg-token-surface-hover keyboard-focused:bg-token-surface-hover touch:h-10 touch:w-10 flex h-9 w-9 items-center justify-center rounded-lg focus:outline-none disabled:opacity-50"
                    href="/"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="icon">
                      <path d="M2.6687 11.333V8.66699C2.6687 7.74455 2.66841 7.01205 2.71655 6.42285C2.76533 5.82612 2.86699 5.31731 3.10425 4.85156L3.25854 4.57617C3.64272 3.94975 4.19392 3.43995 4.85229 3.10449L5.02905 3.02149C5.44666 2.84233 5.90133 2.75849 6.42358 2.71582C7.01272 2.66769 7.74445 2.66797 8.66675 2.66797H9.16675C9.53393 2.66797 9.83165 2.96586 9.83179 3.33301C9.83179 3.70028 9.53402 3.99805 9.16675 3.99805H8.66675C7.7226 3.99805 7.05438 3.99834 6.53198 4.04102C6.14611 4.07254 5.87277 4.12568 5.65601 4.20313L5.45581 4.28906C5.01645 4.51293 4.64872 4.85345 4.39233 5.27149L4.28979 5.45508C4.16388 5.7022 4.08381 6.01663 4.04175 6.53125C3.99906 7.05373 3.99878 7.7226 3.99878 8.66699V11.333C3.99878 12.2774 3.99906 12.9463 4.04175 13.4688C4.08381 13.9833 4.16389 14.2978 4.28979 14.5449L4.39233 14.7285C4.64871 15.1465 5.01648 15.4871 5.45581 15.7109L5.65601 15.7969C5.87276 15.8743 6.14614 15.9265 6.53198 15.958C7.05439 16.0007 7.72256 16.002 8.66675 16.002H11.3337C12.2779 16.002 12.9461 16.0007 13.4685 15.958C13.9829 15.916 14.2976 15.8367 14.5447 15.7109L14.7292 15.6074C15.147 15.3511 15.4879 14.9841 15.7117 14.5449L15.7976 14.3447C15.8751 14.128 15.9272 13.8546 15.9587 13.4688C16.0014 12.9463 16.0017 12.2774 16.0017 11.333V10.833C16.0018 10.466 16.2997 10.1681 16.6667 10.168C17.0339 10.168 17.3316 10.4659 17.3318 10.833V11.333C17.3318 12.2555 17.3331 12.9879 17.2849 13.5771C17.2422 14.0993 17.1584 14.5541 16.9792 14.9717L16.8962 15.1484C16.5609 15.8066 16.0507 16.3571 15.4246 16.7412L15.1492 16.8955C14.6833 17.1329 14.1739 17.2354 13.5769 17.2842C12.9878 17.3323 12.256 17.332 11.3337 17.332H8.66675C7.74446 17.332 7.01271 17.3323 6.42358 17.2842C5.90135 17.2415 5.44665 17.1577 5.02905 16.9785L4.85229 16.8955C4.19396 16.5601 3.64271 16.0502 3.25854 15.4238L3.10425 15.1484C2.86697 14.6827 2.76534 14.1739 2.71655 13.5771C2.66841 12.9879 2.6687 12.2555 2.6687 11.333ZM13.4646 3.11328C14.4201 2.334 15.8288 2.38969 16.7195 3.28027L16.8865 3.46485C17.6141 4.35685 17.6143 5.64423 16.8865 6.53613L16.7195 6.7207L11.6726 11.7686C11.1373 12.3039 10.4624 12.6746 9.72827 12.8408L9.41089 12.8994L7.59351 13.1582C7.38637 13.1877 7.17701 13.1187 7.02905 12.9707C6.88112 12.8227 6.81199 12.6134 6.84155 12.4063L7.10132 10.5898L7.15991 10.2715C7.3262 9.53749 7.69692 8.86241 8.23218 8.32715L13.2791 3.28027L13.4646 3.11328ZM15.7791 4.2207C15.3753 3.81702 14.7366 3.79124 14.3035 4.14453L14.2195 4.2207L9.17261 9.26856C8.81541 9.62578 8.56774 10.0756 8.45679 10.5654L8.41772 10.7773L8.28296 11.7158L9.22241 11.582L9.43433 11.543C9.92426 11.432 10.3749 11.1844 10.7322 10.8271L15.7791 5.78027L15.8552 5.69629C16.185 5.29194 16.1852 4.708 15.8552 4.30371L15.7791 4.2207Z" />
                    </svg>
                  </Link>
                </span>
              </div>
              <div className="no-draggable flex-1">
                <div className="flex items-center">
                  <button
                    aria-label=""
                    type="button"
                    className="group flex cursor-pointer justify-center items-center gap-1 rounded-lg min-h-9 touch:min-h-10 px-2.5 text-lg hover:bg-token-surface-hover focus-visible:bg-token-surface-hover font-normal whitespace-nowrap focus-visible:outline-none"
                  >
                    <div>MillionScope</div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="icon-sm text-token-text-tertiary">
                      <path d="M12.1338 5.94433C12.3919 5.77382 12.7434 5.80202 12.9707 6.02929C13.1979 6.25656 13.2261 6.60807 13.0556 6.8662L12.9707 6.9707L8.47067 11.4707C8.21097 11.7304 7.78896 11.7304 7.52926 11.4707L3.02926 6.9707L2.9443 6.8662C2.77379 6.60807 2.80199 6.25656 3.02926 6.02929C3.25653 5.80202 3.60804 5.77382 3.86617 5.94433L3.97067 6.02929L7.99996 10.0586L12.0293 6.02929L12.1338 5.94433Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="no-draggable flex items-center justify-center">
                <Link
                  href="/login"
                  className="btn relative btn-primary btn-small"
                  data-testid="mobile-login-button"
                >
                  <div className="flex items-center justify-center">Log in</div>
                </Link>
              </div>
            </div>

            <div className="no-draggable bg-token-bg-primary flex w-full items-center justify-center md:hidden"></div>

            <main className="transition-width relative h-full w-full flex-1 overflow-auto -translate-y-[calc(env(safe-area-inset-bottom,0px)/2)] pt-[calc(env(safe-area-inset-bottom,0px)/2)]" id="main">
              <div id="thread" className="group/thread @container/thread h-full w-full">
                <div role="presentation" className="composer-parent flex flex-col focus-visible:outline-0 overflow-hidden h-full">
                  {/* Desktop Header */}
                  <header
                    id="page-header"
                    className="draggable no-draggable-children top-0 p-2 touch:p-2.5 flex items-center justify-between z-20 h-header-height pointer-events-none select-none *:pointer-events-auto motion-safe:transition max-md:hidden absolute start-0 end-0 thread-xl:absolute thread-xl:start-0 thread-xl:end-0 thread-xl:shadow-none! thread-xl:bg-transparent bg-transparent [box-shadow:var(--sharp-edge-top-shadow-placeholder)]"
                  >
                    <div className="absolute start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2"></div>
                    <div className="flex items-center">
                      <Link
                        className="hover:bg-token-bg-tertiary group touch:h-10 flex aspect-square h-9 items-center justify-center rounded-[10px]"
                        href="/"
                      >
                        <div>
                          <Image src="/logo.svg" width={20} height={20} alt="MillionScope Logo" className="icon-lg -m-1" />
                        </div>
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <div className="flex items-center" id="conversation-header-actions">
                        <div className="flex items-center">
                          <div className="flex items-center justify-center gap-2">
                            <Link
                              href="/login"
                              className="btn relative btn-primary"
                              data-testid="login-button"
                            >
                              <div className="flex items-center justify-center">Log in</div>
                            </Link>
                            <Link
                              href="/register"
                              className="btn relative btn-secondary screen-arch:hidden md:screen-arch:flex"
                              data-testid="signup-button"
                            >
                              <div className="flex items-center justify-center">Sign up for free</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>

                  {/* Main Content */}
                  <div className="relative basis-auto shrink flex flex-col justify-end max-sm:grow max-sm:justify-center sm:min-h-[42svh]">
                    <div className="flex justify-center">
                      <div className="mb-7 hidden text-center sm:block">
                        <div className="relative inline-flex justify-center text-center text-2xl leading-9 font-semibold">
                          <div>
                            <div className="grid-cols-1 items-center justify-end">
                              <h1 className="mb-4">MillionScope</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-token-text-primary mt-[var(--screen-optical-compact-offset-amount)] w-full shrink flex-col items-center justify-center px-4 transition-opacity sm:hidden h-full opacity-100 flex">
                        <div className="relative inline-flex justify-center text-center text-2xl leading-9 font-semibold">
                          <div>
                            <div className="grid-cols-1 items-center justify-end">
                              <h1 className="mb-4">MillionScope</h1>
                            </div>
                          </div>
                        </div>
                        <div className="" style={{ opacity: 1 }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Composer Section */}
                  <div
                    id="thread-bottom-container"
                    className="group/thread-bottom-container relative isolate z-10 w-full basis-auto min-h-0 sm:grow flex flex-col"
                  >
                    <div id="thread-bottom">
                      <div className="text-base mx-auto px-4 sm:px-6 lg:px-16">
                        <div className="mx-auto max-w-2xl lg:max-w-3xl flex-1">
                          <div className="flex justify-center empty:hidden"></div>
                          <div className="relative z-1 flex h-full max-w-full flex-1 flex-col">
                            <form className="group/composer w-full">
                              <div className="bg-token-bg-primary cursor-text overflow-clip bg-clip-padding p-2.5 contain-inline-size dark:bg-[#303030] grid grid-cols-[auto_1fr_auto] shadow-lg border border-gray-200 dark:border-gray-700" style={{ borderRadius: '28px' }}>
                                <div className="-my-2.5 flex min-h-14 items-center overflow-x-hidden px-1.5 col-span-3">
                                  <div className="text-token-text-primary max-h-52 flex-1 overflow-auto">
                                    <div
                                      className="ProseMirror min-h-[44px] p-3 text-gray-400"
                                      style={{ outline: 'none' }}
                                    >
                                      Ask anything
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="text-token-text-secondary relative mt-auto flex min-h-8 w-full items-center justify-center p-2 text-center text-xs md:px-[60px]">
                      <span className="text-sm leading-none">
                        By messaging MillionScope, you agree to our{" "}
                        <Link
                          href="/terms"
                          className="text-token-text-primary decoration-token-text-primary underline"
                        >
                          Terms
                        </Link>{" "}
                        and have read our{" "}
                        <Link
                          href="/privacy"
                          className="text-token-text-primary decoration-token-text-primary underline"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}