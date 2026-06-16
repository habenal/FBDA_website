type IconName = 
  | 'menu'
  | 'close'
  | 'phone'
  | 'mail'
  | 'globe'
  | 'send'
  | 'check-circle'
  | 'alert-circle'
  | 'loader'
  | 'cpu'
  | 'coins'
  | 'users'
  | 'heart';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
}

const iconPaths: Record<IconName, string> = {
  menu: '/assets/icons/menu.svg',
  close: '/assets/icons/close.svg',
  phone: '/assets/icons/phone.svg',
  mail: '/assets/icons/mail.svg',
  globe: '/assets/icons/globe.svg',
  send: '/assets/icons/send.svg',
  'check-circle': '/assets/icons/check-circle.svg',
  'alert-circle': '/assets/icons/alert-circle.svg',
  loader: '/assets/icons/loader.svg',
  cpu: '/assets/icons/cpu.svg',
  coins: '/assets/icons/coins.svg',
  users: '/assets/icons/users.svg',
  heart: '/assets/icons/heart.svg',
};

export function Icon({ name, size = 24, className = '' }: IconProps) {
  return (
    <img
      src={iconPaths[name]}
      alt={name}
      width={size}
      height={size}
      className={`inline-block ${className}`}
      style={{ color: 'currentColor' }}
    />
  );
}

// Wrapper components for common icons used as React components
export function MenuIcon({ size = 24, className = '' }: Omit<IconProps, 'name'>) {
  return <Icon name="menu" size={size} className={className} />;
}

export function CloseIcon({ size = 24, className = '' }: Omit<IconProps, 'name'>) {
  return <Icon name="close" size={size} className={className} />;
}

export function PhoneIcon({ size = 24, className = '' }: Omit<IconProps, 'name'>) {
  return <Icon name="phone" size={size} className={className} />;
}

export function MailIcon({ size = 24, className = '' }: Omit<IconProps, 'name'>) {
  return <Icon name="mail" size={size} className={className} />;
}

export function GlobeIcon({ size = 24, className = '' }: Omit<IconProps, 'name'>) {
  return <Icon name="globe" size={size} className={className} />;
}

export function SendIcon({ size = 24, className = '' }: Omit<IconProps, 'name'>) {
  return <Icon name="send" size={size} className={className} />;
}

export function CheckCircleIcon({ size = 24, className = '' }: Omit<IconProps, 'name'>) {
  return <Icon name="check-circle" size={size} className={className} />;
}

export function AlertCircleIcon({ size = 24, className = '' }: Omit<IconProps, 'name'>) {
  return <Icon name="alert-circle" size={size} className={className} />;
}

export function LoaderIcon({ size = 24, className = '' }: Omit<IconProps, 'name'>) {
  return <Icon name="loader" size={size} className={className} />;
}

export function CpuIcon({ size = 24, className = '' }: Omit<IconProps, 'name'>) {
  return <Icon name="cpu" size={size} className={className} />;
}

export function CoinsIcon({ size = 24, className = '' }: Omit<IconProps, 'name'>) {
  return <Icon name="coins" size={size} className={className} />;
}

export function UsersIcon({ size = 24, className = '' }: Omit<IconProps, 'name'>) {
  return <Icon name="users" size={size} className={className} />;
}

export function HeartIcon({ size = 24, className = '' }: Omit<IconProps, 'name'>) {
  return <Icon name="heart" size={size} className={className} />;
}
