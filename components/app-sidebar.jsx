"use client"

import { useRouter } from "next/navigation"
import { PlusIcon } from "@/components/icons"
import { SidebarHistory } from "@/components/sidebar-history"
import { SidebarUserNav } from "@/components/sidebar-user-nav"
import Link from "next/link"
import { useSidebar } from "@/contexts/sidebar"
import Image from "next/image"

export function AppSidebar() {
  const router = useRouter()
  const { setOpenMobile } = useSidebar()

  return (
    <div
      className="border-token-border-light relative z-21 h-full shrink-0 overflow-hidden border-e max-md:hidden"
      id="millionscope-sidebar"
      style={{ width: "var(--sidebar-width)", backgroundColor: "var(--bg-elevated-secondary)" }}
    >
      <div className="relative flex h-full flex-col">
        {/* Tiny Bar for Collapsed State */}
        <div
          id="sidebar-tiny-bar"
          className="group/tiny-bar flex h-full w-(--sidebar-rail-width) cursor-e-resize flex-col items-start bg-transparent pb-1.5 motion-safe:transition-colors rtl:cursor-w-resize absolute inset-0 pointer-events-none opacity-0 motion-safe:[transition-timing-function:steps(1,end)] motion-safe:transition-opacity motion-safe:duration-150"
          inert={true}
        >
          <div className="h-header-height flex items-center justify-center">
            <button
              tabIndex="0"
              data-fill=""
              className="group __menu-item hoverable gap-1.5 cursor-e-resize rtl:cursor-w-resize"
              aria-label="Open sidebar"
              aria-expanded="false"
              aria-controls="millionscope-sidebar"
              data-state="closed"
            >
              <div className="flex items-center justify-center group-disabled:opacity-50 group-data-disabled:opacity-50 icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-lg -m-1 group-hover/tiny-bar:hidden group-focus-visible:hidden"
                >
                  <path d="M11.2475 18.25C10.6975 18.25 10.175 18.1455 9.67999 17.9365C9.18499 17.7275 8.74499 17.436 8.35999 17.062C7.94199 17.205 7.50749 17.2765 7.05649 17.2765C6.31949 17.2765 5.63749 17.095 5.01049 16.732C4.38349 16.369 3.87749 15.874 3.49249 15.247C3.11849 14.62 2.93149 13.9215 2.93149 13.1515C2.93149 12.8325 2.97549 12.486 3.06349 12.112C2.62349 11.705 2.28249 11.2375 2.04049 10.7095C1.79849 10.1705 1.67749 9.6095 1.67749 9.0265C1.67749 8.4325 1.80399 7.8605 2.05699 7.3105C2.30999 6.7605 2.66199 6.2875 3.11299 5.8915C3.57499 5.4845 4.10849 5.204 4.71349 5.05C4.83449 4.423 5.08749 3.862 5.47249 3.367C5.86849 2.861 6.35249 2.465 6.92449 2.179C7.49649 1.893 8.10699 1.75 8.75599 1.75C9.30599 1.75 9.82849 1.8545 10.3235 2.0635C10.8185 2.2725 11.2585 2.564 11.6435 2.938C12.0615 2.795 12.496 2.7235 12.947 2.7235C13.684 2.7235 14.366 2.905 14.993 3.268C15.62 3.631 16.1205 4.126 16.4945 4.753C16.8795 5.38 17.072 6.0785 17.072 6.8485C17.072 7.1675 17.028 7.514 16.94 7.888C17.38 8.295 17.721 8.768 17.963 9.307C18.205 9.835 18.326 10.3905 18.326 10.9735C18.326 11.5675 18.1995 12.1395 17.9465 12.6895C17.6935 13.2395 17.336 13.718 16.874 14.125C16.423 14.521 15.895 14.796 15.29 14.95C15.169 15.577 14.9105 16.138 14.5145 16.633C14.1295 17.139 13.651 17.535 13.079 17.821C12.507 18.107 11.8965 18.25 11.2475 18.25Z" />
                </svg>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  data-rtl-flip=""
                  className="icon hidden group-hover/tiny-bar:block group-focus-visible:block"
                >
                  <path d="M6.83496 3.99992C6.38353 4.00411 6.01421 4.0122 5.69824 4.03801C5.31232 4.06954 5.03904 4.12266 4.82227 4.20012L4.62207 4.28606C4.18264 4.50996 3.81498 4.85035 3.55859 5.26848L3.45605 5.45207C3.33013 5.69922 3.25006 6.01354 3.20801 6.52824C3.16533 7.05065 3.16504 7.71885 3.16504 8.66301V11.3271C3.16504 12.2712 3.16533 12.9394 3.20801 13.4618C3.25006 13.9766 3.33013 14.2909 3.45605 14.538L3.55859 14.7216C3.81498 15.1397 4.18266 15.4801 4.62207 15.704L4.82227 15.79C5.03904 15.8674 5.31234 15.9205 5.69824 15.9521C6.01398 15.9779 6.383 15.986 6.83398 15.9902L6.83496 3.99992Z" />
                </svg>
              </div>
            </button>
          </div>
          <div className="mt-(--sidebar-section-first-margin-top)">
            <div className="" data-state="closed">
              <Link
                tabIndex="0"
                data-fill=""
                className="group __menu-item hoverable"
                data-testid="create-new-chat-button"
                href="/"
                data-discover="true"
                onClick={() => setOpenMobile(false)}
              >
                <div className="flex items-center justify-center group-disabled:opacity-50 group-data-disabled:opacity-50 icon">
                  <PlusIcon />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Sidebar Content */}
        <div className="opacity-100 motion-safe:transition-opacity motion-safe:duration-150 motion-safe:ease-linear h-full w-[var(--sidebar-width)] overflow-x-clip overflow-y-auto text-clip whitespace-nowrap bg-token-bg-elevated-secondary">
          <h2
            style={{
              position: "absolute",
              border: 0,
              width: "1px",
              height: "1px",
              padding: 0,
              margin: "-1px",
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
            }}
          >
            Chat history
          </h2>
          <nav
            className="group/scrollport relative flex h-full w-full flex-1 flex-col overflow-y-auto transition-opacity duration-500"
            aria-label="Chat history"
            data-scrolled-from-end=""
          >
            {/* Sidebar Header */}
            <div className="short:group-data-scrolled-from-top/scrollport:shadow-(--sharp-edge-top-shadow) bg-token-bg-elevated-secondary sticky top-0 z-30">
              <div className="touch:px-1.5 px-2">
                <div id="sidebar-header" className="h-header-height flex items-center justify-between">
                  <Link
                    aria-label="Home"
                    className="text-token-text-primary no-draggable hover:bg-token-surface-hover keyboard-focused:bg-token-surface-hover touch:h-10 touch:w-10 flex h-9 w-9 items-center justify-center rounded-lg focus:outline-none disabled:opacity-50"
                    href="/"
                    data-discover="true"
                    onClick={() => setOpenMobile(false)}
                  >
                    <Image src="/logo.svg" width={20} height={20} alt="MillionScope Logo" />
                  </Link>
                  <div className="flex">
                    <button
                      className="text-token-text-tertiary no-draggable hover:bg-token-surface-hover keyboard-focused:bg-token-surface-hover touch:h-10 touch:w-10 flex h-9 w-9 items-center justify-center rounded-lg focus:outline-none disabled:opacity-50 no-draggable cursor-w-resize rtl:cursor-e-resize"
                      aria-expanded="true"
                      aria-controls="stage-slideover-sidebar"
                      aria-label="Close sidebar"
                      data-testid="close-sidebar-button"
                      data-state="closed"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" data-rtl-flip="" className="icon max-md:hidden">
                        <path d="M6.83496 3.99992C6.38353 4.00411 6.01421 4.0122 5.69824 4.03801C5.31232 4.06954 5.03904 4.12266 4.82227 4.20012L4.62207 4.28606C4.18264 4.50996 3.81498 4.85035 3.55859 5.26848L3.45605 5.45207C3.33013 5.69922 3.25006 6.01354 3.20801 6.52824C3.16533 7.05065 3.16504 7.71885 3.16504 8.66301V11.3271C3.16504 12.2712 3.16533 12.9394 3.20801 13.4618C3.25006 13.9766 3.33013 14.2909 3.45605 14.538L3.55859 14.7216C3.81498 15.1397 4.18266 15.4801 4.62207 15.704L4.82227 15.79C5.03904 15.8674 5.31234 15.9205 5.69824 15.9521C6.01398 15.9779 6.383 15.986 6.83398 15.9902L6.83496 3.99992ZM18.165 11.3271C18.165 12.2493 18.1653 12.9811 18.1172 13.5702C18.0745 14.0924 17.9916 14.5472 17.8125 14.9648L17.7295 15.1415C17.394 15.8 16.8834 16.3511 16.2568 16.7353L15.9814 16.8896C15.5157 17.1268 15.0069 17.2285 14.4102 17.2773C13.821 17.3254 13.0893 17.3251 12.167 17.3251H7.83301C6.91071 17.3251 6.17898 17.3254 5.58984 17.2773C5.06757 17.2346 4.61294 17.1508 4.19531 16.9716L4.01855 16.8896C3.36014 16.5541 2.80898 16.0434 2.4248 15.4169L2.27051 15.1415C2.03328 14.6758 1.93158 14.167 1.88281 13.5702C1.83468 12.9811 1.83496 12.2493 1.83496 11.3271V8.66301C1.83496 7.74072 1.83468 7.00898 1.88281 6.41985C1.93157 5.82309 2.03329 5.31432 2.27051 4.84856L2.4248 4.57317C2.80898 3.94666 3.36012 3.436 4.01855 3.10051L4.19531 3.0175C4.61285 2.83843 5.06771 2.75548 5.58984 2.71281C6.17898 2.66468 6.91071 2.66496 7.83301 2.66496H12.167C13.0893 2.66496 13.821 2.66468 14.4102 2.71281C15.0069 2.76157 15.5157 2.86329 15.9814 3.10051L16.2568 3.25481C16.8833 3.63898 17.394 4.19012 17.7295 4.84856L17.8125 5.02531C17.9916 5.44285 18.0745 5.89771 18.1172 6.41985C18.1653 7.00898 18.165 7.74072 18.165 8.66301V11.3271ZM8.16406 15.995H12.167C13.1112 15.995 13.7794 15.9947 14.3018 15.9521C14.8164 15.91 15.1308 15.8299 15.3779 15.704L15.5615 15.6015C15.9797 15.3451 16.32 14.9774 16.5439 14.538L16.6299 14.3378C16.7074 14.121 16.7605 13.8478 16.792 13.4618C16.8347 12.9394 16.835 12.2712 16.835 11.3271V8.66301C16.835 7.71885 16.8347 7.05065 16.792 6.52824C16.7605 6.14232 16.7073 5.86904 16.6299 5.65227L16.5439 5.45207C16.32 5.01264 15.9796 4.64498 15.5615 4.3886L15.3779 4.28606C15.1308 4.16013 14.8165 4.08006 14.3018 4.03801C13.7794 3.99533 13.1112 3.99504 12.167 3.99504H8.16406C8.16407 3.99667 8.16504 3.99829 8.16504 3.99992L8.16406 15.995Z"></path>
                      </svg>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="icon md:hidden">
                        <path d="M14.2548 4.75488C14.5282 4.48152 14.9717 4.48152 15.2451 4.75488C15.5184 5.02825 15.5184 5.47175 15.2451 5.74512L10.9902 10L15.2451 14.2549L15.3349 14.3652C15.514 14.6369 15.4841 15.006 15.2451 15.2451C15.006 15.4842 14.6368 15.5141 14.3652 15.335L14.2548 15.2451L9.99995 10.9902L5.74506 15.2451C5.4717 15.5185 5.0282 15.5185 4.75483 15.2451C4.48146 14.9718 4.48146 14.5282 4.75483 14.2549L9.00971 10L4.75483 5.74512L4.66499 5.63477C4.48589 5.3631 4.51575 4.99396 4.75483 4.75488C4.99391 4.51581 5.36305 4.48594 5.63471 4.66504L5.74506 4.75488L9.99995 9.00977L14.2548 4.75488Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Menu Items */}
            <aside className="pt-(--sidebar-section-first-margin-top) last:mb-5 tall:sticky tall:top-header-height tall:z-20 bg-token-bg-elevated-secondary relative [--sticky-spacer:6px] tall:group-data-scrolled-from-top/scrollport:shadow-(--sharp-edge-top-shadow) pb-[calc(var(--sidebar-section-margin-top)-var(--sidebar-section-first-margin-top))]">
              <Link
                tabIndex="0"
                data-fill=""
                className="group __menu-item hoverable"
                data-testid="create-new-chat-button"
                href="/"
                data-discover="true"
                onClick={() => setOpenMobile(false)}
              >
                <div className="flex min-w-0 items-center gap-1.5">
                  <div className="flex items-center justify-center group-disabled:opacity-50 group-data-disabled:opacity-50 icon">
                    <PlusIcon />
                  </div>
                  <div className="flex min-w-0 grow items-center gap-2.5 group-data-no-contents-gap:gap-0">
                    <div className="truncate">New chat</div>
                  </div>
                </div>
                <div className="trailing highlight text-token-text-tertiary">
                  <div className="inline-flex whitespace-pre *:inline-flex *:font-sans touch:hidden">
                    <kbd aria-label="Shift">
                      <span className="min-w-[1em]">⇧</span>
                    </kbd>
                    <kbd aria-label="Command">
                      <span className="min-w-[1em]">⌘</span>
                    </kbd>
                    <kbd>
                      <span className="min-w-[1em]">O</span>
                    </kbd>
                  </div>
                </div>
              </Link>

              <div tabIndex="0" data-fill="" className="group __menu-item hoverable">
                <div className="flex min-w-0 items-center gap-1.5">
                  <div className="flex items-center justify-center group-disabled:opacity-50 group-data-disabled:opacity-50 icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="icon" aria-hidden="true">
                      <path d="M14.0857 8.74999C14.0857 5.80355 11.6972 3.41503 8.75073 3.41503C5.80429 3.41503 3.41577 5.80355 3.41577 8.74999C3.41577 11.6964 5.80429 14.085 8.75073 14.085C11.6972 14.085 14.0857 11.6964 14.0857 8.74999ZM15.4158 8.74999C15.4158 10.3539 14.848 11.8245 13.9041 12.9746L13.9705 13.0303L16.9705 16.0303L17.0564 16.1338C17.2269 16.3919 17.1977 16.7434 16.9705 16.9707C16.7432 17.1975 16.3925 17.226 16.1345 17.0557L16.03 16.9707L13.03 13.9707L12.9753 13.9033C11.8253 14.8472 10.3547 15.415 8.75073 15.415C5.06975 15.415 2.08569 12.431 2.08569 8.74999C2.08569 5.06901 5.06975 2.08495 8.75073 2.08495C12.4317 2.08495 15.4158 5.06901 15.4158 8.74999Z" />
                    </svg>
                  </div>
                  <div className="flex min-w-0 grow items-center gap-2.5 group-data-no-contents-gap:gap-0">
                    <div className="truncate">Search chats</div>
                  </div>
                </div>
                <div className="trailing highlight text-token-text-tertiary">
                  <div className="touch:hidden">
                    <div className="inline-flex whitespace-pre *:inline-flex *:font-sans">
                      <kbd aria-label="Command">
                        <span className="min-w-[1em]">⌘</span>
                      </kbd>
                      <kbd>
                        <span className="min-w-[1em]">K</span>
                      </kbd>
                    </div>
                  </div>
                </div>
              </div>

              <Link tabIndex="0" data-fill="" className="group __menu-item hoverable gap-1.5" data-testid="sidebar-item-library" href="/library" data-discover="true">
                <div className="flex min-w-0 items-center gap-1.5">
                  <div className="flex items-center justify-center group-disabled:opacity-50 group-data-disabled:opacity-50 icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      aria-hidden="false"
                      aria-label="Library"
                    >
                      <path d="M9.38759 8.53403C10.0712 8.43795 10.7036 8.91485 10.7997 9.59849C10.8956 10.2819 10.4195 10.9133 9.73622 11.0096C9.05259 11.1057 8.4202 10.6298 8.32411 9.94614C8.22804 9.26258 8.70407 8.63022 9.38759 8.53403Z" />
                    </svg>
                  </div>
                  <div className="flex min-w-0 grow items-center gap-2.5 group-data-no-contents-gap:gap-0">
                    <div className="truncate">Library</div>
                  </div>
                </div>
              </Link>
            </aside>

            {/* Chat History */}
            <div id="history" className="">
              <SidebarHistory />
            </div>

            {/* Bottom spacer */}
            <div className="grow"></div>

            {/* User Navigation */}
            <div className="sticky bottom-0 z-30 empty:hidden bg-token-bg-elevated-secondary py-1.5 group-data-scrolled-from-end/scrollport:shadow-(--sharp-edge-bottom-shadow)">
              <SidebarUserNav />
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
