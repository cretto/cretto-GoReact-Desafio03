import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid #eee;
  margin-bottom: 15px;
  padding-bottom: 15px;
`;

export const Info = styled.div`
  display: flex;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: #999;
    font-size: 14px;

    strong {
      color: #333;
      font-size: 16px;
    }
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background-color: #fff;
    border: none;
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }

  .remove-button {
    font-size: 14px;
    color: #fff;
    background-color: #d45454;
    border-radius: 50%;
    width: 18px;
    height: 18px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  .detail-button {
    font-size: 16px;
    color: #999;

    cursor: pointer;
  }
`;
