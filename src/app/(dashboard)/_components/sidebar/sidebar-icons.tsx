import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

const iconClass = "size-[25px] shrink-0"

function wrap(
  children: ReactNode,
  className?: string,
  viewBox = "0 0 24 24",
) {
  return (
    <svg
      viewBox={viewBox}
      width={25}
      height={24}
      className={cn(iconClass, className)}
      aria-hidden
    >
      {children}
    </svg>
  )
}

export function SidebarIconDars({ className }: { className?: string }) {
  return wrap(
    <g fill="none" stroke="currentColor">
      <path
        strokeWidth="1.5"
        d="M5.97 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm11.5 6h3c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.5 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.51 15.5C7.12 16.71 7.98 19 9.82 19h2.68"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.986 5.5h.012m12.988 13h.012"
      />
    </g>,
    className,
    "0 0 25 24",
  )
}

export function SidebarIconResurs({ className }: { className?: string }) {
  return wrap(
    <path
      fill="currentColor"
      d="M11.75 6v13.91c0 .71-.72 1.2-1.37.93-1.86-.78-4.17-1.46-5.81-1.68l-.31-.04C3.29 19 2.5 18.11 2.5 17.14V5.25c0-1.2.97-2.17 2.17-2.17h.07c1.88.16 4.65 1.04 6.48 2.03a1 1 0 0 1 .53.89m8.58-2.92h-.06c-.24.02-.5.05-.77.1-1.23.2-2.69.62-4 1.14-.62.25-1.2.52-1.71.79-.33.18-.54.52-.54.89v13.91c0 .71.72 1.2 1.37.93 1.86-.78 4.17-1.46 5.81-1.68l.31-.04c.97-.12 1.76-1.01 1.76-1.98V5.25c0-1.2-.97-2.17-2.17-2.17m-.56 10.65c0 .39-.28.56-.62.37l-1.06-.59a.5.5 0 0 0-.41 0l-1.06.59c-.34.19-.62.02-.62-.37v-3.07c0-.46.38-.84.84-.84h2.1c.46 0 .84.38.84.84v3.07z"
    />,
    className,
    "0 0 25 24",
  )
}

export function SidebarIconSuhbat({ className }: { className?: string }) {
  return wrap(
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.99 1.99 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417m2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414m5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417"
      clipRule="evenodd"
    />,
    className,
  )
}

export function SidebarIconBiz({ className }: { className?: string }) {
  return wrap(
    <g fill="currentColor">
      <path
        d="M10.75 2.45c.7-.59 1.83-.59 2.51 0l1.58 1.35c.3.25.87.46 1.27.46h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .4.21.96.46 1.26l1.35 1.58c.59.7.59 1.83 0 2.51l-1.35 1.58c-.25.3-.46.86-.46 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.4 0-.96.21-1.26.46l-1.58 1.35c-.7.59-1.83.59-2.51 0l-1.58-1.35c-.3-.25-.87-.46-1.26-.46H6.17c-1.06 0-1.93-.87-1.93-1.93v-1.71c0-.39-.2-.96-.45-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.45-.86.45-1.25V6.2c0-1.06.87-1.93 1.93-1.93H7.9c.4 0 .96-.21 1.26-.46z"
        opacity="0.4"
      />
      <path d="M12 7.38c.55 0 1 .45 1 1s-.44 1-1 1c-.55 0-1-.45-1-1s.44-1 1-1m0 3.15c.41 0 .75.34.75.75v4.84c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.83c0-.42.33-.76.75-.76" />
    </g>,
    className,
  )
}

export function SidebarIconSettings({ className }: { className?: string }) {
  return wrap(
    <g fill="currentColor">
      <path
        d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.9 1.9 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9"
        opacity="0.4"
      />
      <path d="M12 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5" />
    </g>,
    className,
  )
}

export function SidebarIconHelp({ className }: { className?: string }) {
  return wrap(
    <g fill="currentColor">
      <path
        d="M19.21 6.36c-1.04-2.1-3.05-3.65-5.38-4.16-2.44-.54-4.94.04-6.85 1.58a7.97 7.97 0 0 0-3.01 6.27c0 2.59 1.55 5.3 3.89 6.87v.83c-.01.28-.02.71.32 1.06.35.36.87.4 1.28.4h5.13c.54 0 .95-.15 1.23-.43.38-.39.37-.89.36-1.16v-.7c3.1-2.09 5.05-6.5 3.03-10.56"
        opacity="0.4"
      />
      <path d="M15.26 22c-.06 0-.13-.01-.19-.03-2.01-.57-4.12-.57-6.13 0-.37.1-.76-.11-.86-.48a.69.69 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0 .37.11.59.49.48.86-.1.31-.38.51-.68.51" />
    </g>,
    className,
  )
}

export function SidebarIconTss({ className }: { className?: string }) {
  return wrap(
    <g fill="currentColor">
      <path
        d="M17.98 10.79v4c0 .26-.01.51-.04.75-.23 2.7-1.82 4.04-4.75 4.04h-.4c-.25 0-.49.12-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a.92.92 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4c0-2.93 1.35-4.52 4.04-4.75.24-.03.49-.04.75-.04h6.4c3.19 0 4.79 1.6 4.79 4.79"
        opacity="0.4"
      />
      <path d="M9.99 14c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1m3.5 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M6.5 14c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
      <path d="M21.98 6.79v4c0 2.94-1.35 4.52-4.04 4.75.03-.24.04-.49.04-.75v-4c0-3.19-1.6-4.79-4.79-4.79h-6.4c-.26 0-.51.01-.75.04C6.27 3.35 7.86 2 10.79 2h6.4c3.19 0 4.79 1.6 4.79 4.79" />
    </g>,
    className,
  )
}

export function SidebarIconAnalytics({ className }: { className?: string }) {
  return wrap(
    <g fill="currentColor">
      <rect x="4" y="14" width="4.5" height="6" rx="1" opacity="0.35" />
      <rect x="10.25" y="10" width="4.5" height="10" rx="1" opacity="0.55" />
      <rect x="16.5" y="6" width="4.5" height="14" rx="1" />
    </g>,
    className,
  )
}

export function SidebarIconLogout({ className }: { className?: string }) {
  return wrap(
    <g fill="currentColor">
      <path
        d="M13.24 2c.47 0 .86.38.86.86v18.29c0 .47-.38.86-.86.86-5.89 0-10-4.11-10-10S7.36 2 13.24 2"
        opacity="0.4"
      />
      <path d="M20.54 11.54 17.7 8.69a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.56 1.56H8.63c-.41 0-.75.34-.75.75s.34.75.75.75h9.57l-1.56 1.56c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.84-2.85a.73.73 0 0 0 0-1.04" />
    </g>,
    className,
  )
}
