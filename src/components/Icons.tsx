import React from 'react';

interface IconProps {
  className?: string;
}

export const LocalStorageIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
    <path d="M9.5 6.5h5" />
    <path d="M9 11.5h6" />
    <path d="M9 14.5h4" />
    <circle cx="12" cy="18.25" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

export const EphemeralRelayIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 12h12" />
    <path d="M12 8l4 4-4 4" />
    <path d="M19.5 6.5v11" />
    <path d="M4.5 7.5a7.5 7.5 0 0 1 11.5-2" />
    <path d="M16 18.5a7.5 7.5 0 0 1-11.5-2" />
  </svg>
);

export const PushAlertIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 8.5a6 6 0 1 0-12 0c0 5-2.5 7-2.5 7h17S18 13.5 18 8.5z" />
    <path d="M10.25 19.5a2 2 0 0 0 3.5 0" />
    <path d="M19.5 4.5l1.5-1.5" />
    <path d="M4.5 4.5L3 3" />
  </svg>
);

export const AutoUpdaterIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3.5v10" />
    <path d="M8.5 10l3.5 3.5 3.5-3.5" />
    <path d="M4.5 15.5v2A2.5 2.5 0 0 0 7 20h10a2.5 2.5 0 0 0 2.5-2.5v-2" />
  </svg>
);

export const SecurityLockIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.4-7.5 9.5-4.3-1.1-7.5-4.9-7.5-9.5V6L12 3z" />
    <rect x="9.25" y="10.5" width="5.5" height="4.5" rx="1" />
    <path d="M10.5 10.5V9a1.5 1.5 0 0 1 3 0v1.5" />
  </svg>
);

export const StatusPollIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3.5" y="4" width="17" height="16" rx="3" />
    <path d="M7.5 9.5h5.5" />
    <path d="M7.5 13h9" />
    <path d="M7.5 16.5h3.5" />
    <circle cx="16.5" cy="9.5" r="1.25" />
  </svg>
);

export const DownloadArrowIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.85"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 3.5v9.5" />
    <path d="M6.25 9.75L10 13.5l3.75-3.75" />
    <path d="M4 15.5h12" />
  </svg>
);

export const ExternalArrowIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M11.5 4.5h4v4" />
    <path d="M8.5 11.5l7-7" />
    <path d="M15.5 11.5v3a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 14.5V6a1.5 1.5 0 0 1 1.5-1.5h3" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.85"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5.5 7.75L10 12.25l4.5-4.5" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.85"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5.5 5.5l9 9" />
    <path d="M14.5 5.5l-9 9" />
  </svg>
);

export const CheckShieldIcon: React.FC<IconProps> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M10 2.75l6 2.5v4.5c0 3.7-2.55 6.85-6 7.75-3.45-.9-6-4.05-6-7.75v-4.5l6-2.5z" />
    <path d="M7.5 10.25l1.75 1.75 3.5-3.5" />
  </svg>
);

export function FeatureIconById({ id, className }: { id: string; className?: string }) {
  switch (id) {
    case 'local-storage':
      return <LocalStorageIcon className={className} />;
    case 'zero-bloat':
      return <EphemeralRelayIcon className={className} />;
    case 'push-alerts':
      return <PushAlertIcon className={className} />;
    case 'auto-updater':
      return <AutoUpdaterIcon className={className} />;
    case 'security-lock':
      return <SecurityLockIcon className={className} />;
    case 'statuses-polls':
      return <StatusPollIcon className={className} />;
    default:
      return <LocalStorageIcon className={className} />;
  }
}
