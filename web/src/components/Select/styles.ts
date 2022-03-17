import styled, { css } from 'styled-components';

interface SelectProps {
  expanded: boolean;
}

export const Container = styled.div<SelectProps>`
  width: 100%;
  height: 44.46px;
  background: #f5f8fa;
  border: 1px solid #cbd6e2;
  box-sizing: border-box;
  border-radius: 2px;
  transition: all 0.5s ease-in-out;

  ${({ expanded }) =>
    expanded &&
    css`
      height: 155px;
    `}
`;

export const Button = styled.button`
  width: 100%;
  height: 44.46px;
  background: transparent;
  border: none;
  padding: 10px 16px;
  font-size: 16px;
  display: flex;
  align-items: center;

  img:first-child {
    margin-right: 15.8px;
  }

  img:last-child {
    margin-left: auto;
  }
`;

export const Content = styled.div<SelectProps>`
  width: 100%;
  height: 0;
  padding: 0 16px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  ::-webkit-scrollbar {
    width: 9px;
  }

  ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: #cbd6e2;
    border-radius: 50px;
    border: 3px solid transparent;
  }

  ${({ expanded }) =>
    expanded &&
    css`
      overflow: auto;
      height: calc(155px - 44.46px);
    `}
`;
