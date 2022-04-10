import React from "react";

export interface NavListItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}
