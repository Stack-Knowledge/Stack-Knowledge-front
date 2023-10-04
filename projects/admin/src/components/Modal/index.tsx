'use client';
import * as S from './style';

interface ModalProps {
  content: string;
  onClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClick }) => (
  <S.ModalWrapper>
    <S.ModalContentWrapper>
      <S.ModalContent>{content}</S.ModalContent>
    </S.ModalContentWrapper>
    <S.ModalButtonWrapper method='dialog'>
      <S.ModalButton>취소</S.ModalButton>
      <S.ModalButton onClick={onClick}>확인</S.ModalButton>
    </S.ModalButtonWrapper>
  </S.ModalWrapper>
);

export default Modal;
