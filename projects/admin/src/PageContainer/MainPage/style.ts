import styled from '@emotion/styled';

export const Modal = styled.dialog`
  width: 350px;
  height: 385px;
  border-radius: 20px;
  background: #fbfbfb;
  padding: 0;
  position: relative;
  border: none;
  outline: none;
  ::backdrop {
    background: rgba(5, 5, 5, 0.4);
  }
`;

export const ModalButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  outline: none;
`;

export const Wrapper = styled.div`
  position: absolute;
  right: 20vw;
  top: 75vh;
  z-index: 3;
`;
