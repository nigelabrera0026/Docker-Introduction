/*
@author:    Nigel Abrera
@date:      March 03, 2024
*/
interface TextProps {
  primary?: boolean;
  backgroundColor?: string;
  disable?: boolean;
  words?: string;
  size?: 'small' | 'medium' | 'large';
}

export type { TextProps };