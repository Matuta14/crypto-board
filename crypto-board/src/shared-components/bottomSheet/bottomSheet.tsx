import { BottomsheetBackground, BottomsheetStyled } from './bottomSheet.styled';
import { IBottomsheetProps } from './types';

export const BottomSheet = ({
  children,
  isOpenSelect,
  setIsOpen,
  height,
}: IBottomsheetProps) => {
  return (
    <BottomsheetStyled isOpenSelect={isOpenSelect} height={height}>
      <BottomsheetBackground
        isOpenSelect={isOpenSelect}
        onClick={() => setIsOpen(false)}
      />
      {children}
    </BottomsheetStyled>
  );
};
