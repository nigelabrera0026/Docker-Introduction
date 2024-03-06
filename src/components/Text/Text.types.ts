/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/
interface TextProps {
  variant?: 'normal' | 'lighter' | 'bold';
  primary?: boolean;
  backgroundColor?: string;
  disabled?: boolean;
  words?: string;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}

export type { TextProps };