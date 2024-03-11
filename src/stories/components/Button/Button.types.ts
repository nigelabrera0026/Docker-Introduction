/*
@author:    Nigel Abrera
@date:      March 02, 2024
*/
interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export type { ButtonProps };