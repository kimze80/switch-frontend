import styled from 'styled-components';
import checkWhiteIcon from '../../assets/check-white.svg';

export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
  input {
    position: absolute;
    left: 1px;
    top: 1px;
    width: 17px;
    height: 17px;
    opacity: 0;
    cursor: pointer;
  }
  input:checked ~ label::before {
    border-color: #7c99b6;
    background: url(${checkWhiteIcon}) #7c99b6 no-repeat center/12px 12px;
    cursor: pointer;
  }
  label {
    display: flex;
    align-items: center;
    ::before {
      content: '';
      display: inline-block;
      height: 14px;
      min-width: 14px;
      border: 1.5px solid #7c99b6;
      border-radius: 2px;
      margin-right: 14px;
    }
  }
`;
