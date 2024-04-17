import React from "react";

export interface TableCellProps {
  children: React.ReactNode;
  backgroundColor?: string;
  colSpan?: number;
  size: 'mobile' | 'normal';
  disabled: boolean;
}
