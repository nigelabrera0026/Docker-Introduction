/** 
 * Type declaration for Card components
 * @author    Nigel Abrera
 * @date      March 02, 2024
 */
import { ImageProps } from "../../base_components/Image";

interface CardProps {
  image: ImageProps;
  backgroundColor?: string;
  size?: 'mobile' | 'normal';
  disabled?: boolean,
  label?: string;
  title?: string;
  content?: string;
  linker?: string;
}

export type { CardProps };