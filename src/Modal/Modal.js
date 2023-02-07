import { ModalContent, ModalWrapper } from './Modal.styled';

export const Modal = ({ children }) => {
  return (
    <ModalWrapper>
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
};
