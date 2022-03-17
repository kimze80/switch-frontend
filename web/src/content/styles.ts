import styled from 'styled-components';
import blob from '../assets/blob.svg';
import syncIcon from '../assets/sync.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${blob}) no-repeat 50% 50%;
`;

export const Content = styled.div`
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const SyncButton = styled.button`
  width: 133px;
  height: 133px;
  border: none;
  border-radius: 130px;
  background: url(${syncIcon}) no-repeat 50% 50%;
  margin: 0 30px 10px;

  &:hover {
    box-shadow: 0 0 12px #b6eef9;
  }
`;

export const StatusText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #374a5e;
  margin: 0;
`;

export const ButtonTextWrapper = styled.div`
  height: 355.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
