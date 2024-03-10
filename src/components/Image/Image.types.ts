/*
@author:    Nigel Abrera
@date:      March 04, 2024
*/

interface ImageProps {
  src: string;
  alt: string;
  size?: 'mobile' | 'normal';
  disabled?: boolean;
}

export type { ImageProps };