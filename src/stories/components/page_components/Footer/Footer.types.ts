/**
 * Type declaration for the Footer component
 * @author Nigel Abrera
 * @date   August 6th, 2024
 */

interface FooterProps {
    backgroundColor?: string;
    primary?: boolean;
    error?: boolean;
    size: 'mobile' | 'normal';
};

export type { FooterProps };