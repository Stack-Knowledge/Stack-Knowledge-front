'use client';
import * as S from './style';

interface MissionDetailModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const MissionDetailModal: React.FC<MissionDetailModalProps> = ({
  onConfirm,
  onCancel,
}) => (
  <S.ModalWrapper>
    <S.ModalContentWrapper>
      <S.ModalContent>문제를 제출하시겠습니까?</S.ModalContent>
    </S.ModalContentWrapper>
    <S.ModalButtonWrapper method='dialog'>
      <S.ModalButton onClick={onCancel}>취소</S.ModalButton>
      <S.ModalButton onClick={onConfirm}>확인</S.ModalButton>
    </S.ModalButtonWrapper>
  </S.ModalWrapper>
);

export default MissionDetailModal;
