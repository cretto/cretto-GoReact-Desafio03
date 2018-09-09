import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  opacity: 1;
  overflow-x: hidden;
  overflow-y: auto;
  animation: show 0.5s ease;
`;

export const Container = styled.div`
  width: 300px;
  height: 155px;
  background-color: #fff;
  box-shadow: 0, 0, 0.625rem, rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 20px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    display: flex;
    justify-content: center;

    margin-bottom: 15px;
  }

  input {
    height: 35px;

    background: #fff;
    border-radius: 5px;
    padding: 20px;
    color: #777;
    font-size: 14px;
    border: 1px solid #c7c7c7;

    margin-bottom: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 45%;
    height: 35px;
    border-radius: 3px;
    border: 0;
    color: #fff;

    &.cancel {
      background-color: #c7c7c7;
    }

    &.add {
      background-color: #77ca77;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
