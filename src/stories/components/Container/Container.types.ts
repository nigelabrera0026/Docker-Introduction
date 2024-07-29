/**
 * Type declaration for Container
 * @author  Nigel Abrera
 * @date    July 29, 2024
 */

interface ContainerProps {
    backgroundColor?: string;
    size?: 'mobile' | 'normal';
    children?: React.ReactNode;
};

export type { ContainerProps };