/*
@author:    Nigel Abrera
@date:      March 02, 2024
*/

interface CardProps {
  backgroundColor?: string;
  size?: 'mobile' | 'normal';
  disabled?: boolean,
  label?: string;
  title?: string;
  content?: string;
  linker?: string;
}

export type { CardProps };