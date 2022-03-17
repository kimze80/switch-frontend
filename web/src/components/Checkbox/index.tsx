/* eslint-disable react/require-default-props */
import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label?: string;
  onChange?: (arg: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  onChange,
  ...rest
}) => {
  return (
    <Container>
      <input
        data-testid="checkbox"
        type="checkbox"
        id={id}
        name={name}
        onChange={onChange}
        {...rest}
      />
      <label htmlFor={name}>{label}</label>
    </Container>
  );
};

export default Checkbox;
