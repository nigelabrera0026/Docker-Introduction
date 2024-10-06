
interface ButtonProps {
  backgroundColor?: string;
  size?: 'mobile' | 'normal';
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export type { ButtonProps };