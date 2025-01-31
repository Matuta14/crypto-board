import React from 'react';

export interface IBottomsheetProps {
  children: React.ReactNode;
  isOpenSelect: boolean;
  setIsOpen: (o: boolean) => void;
  height?: string;
}

export interface IBottomsheetStyledProp {
  isOpenSelect: boolean;
  height?: string;
}
