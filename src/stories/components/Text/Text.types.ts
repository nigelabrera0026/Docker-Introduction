/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/
interface TextProps {
  backgroundColor?: string;
  disabled?: boolean;
  words?: string;
  size?: 'mobile' | 'normal';
  children?: React.ReactNode;
  error?: boolean;
}

export type { TextProps };