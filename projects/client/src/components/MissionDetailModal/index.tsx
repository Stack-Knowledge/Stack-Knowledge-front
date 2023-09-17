'use client';
import * as S from './style';

const MissionDetailModal = () => {
  return (
    <S.ModalWrapper>
      <S.ModalContentWrapper>
        <S.ModalContent>문제를 제출하시겠습니까?</S.ModalContent>
      </S.ModalContentWrapper>
      <S.ModalButtonWrapper>
        <form method='dialog'>
          <S.ModalDeleted>취소</S.ModalDeleted>
        </form>
        <form method='dialog'>
          <S.ModalConfirm>확인</S.ModalConfirm>
        </form>
      </S.ModalButtonWrapper>
    </S.ModalWrapper>
  );
};

export default MissionDetailModal;
