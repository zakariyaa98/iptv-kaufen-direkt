import type { DeviceIcon as DeviceIconId } from "@/lib/devices";

const paths: Record<DeviceIconId, React.ReactNode> = {
  stick: (
    <>
      <rect x="8" y="3" width="8" height="15" rx="2" />
      <path d="M10 18v3h4v-3" />
      <circle cx="12" cy="7" r="1" />
    </>
  ),
  tv: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  box: (
    <>
      <rect x="3" y="8" width="18" height="9" rx="2" />
      <path d="M7 12.5h4M16 12.5h1" />
      <path d="M9 8l3-4 3 4" />
    </>
  ),
  mag: (
    <>
      <rect x="3" y="7" width="18" height="10" rx="3" />
      <circle cx="8" cy="12" r="1.5" />
      <path d="M12 12h6" />
    </>
  ),
  receiver: (
    <>
      <rect x="2.5" y="9" width="19" height="8" rx="1.5" />
      <path d="M6 13h5M15 13h.01M18 13h.01" />
      <path d="M7 9a5 5 0 0 1 10 0" />
    </>
  ),
};

export function DeviceIcon({ icon, className }: { icon: DeviceIconId; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}
