import React from 'react';
import { Container, IconContainer, Title, SubTitle } from './styles';
import Select from '../Select';

type emailGroup = {
  id: string;
  name: string;
};

interface CardProps {
  title: string;
  subtitle: string;
  icon: string;
  data: emailGroup[];
}

const Card: React.FC<CardProps> = ({ title, subtitle, icon, data }) => {
  return (
    <Container data-testid="card">
      <IconContainer>
        <img src={icon} alt="" />
      </IconContainer>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Select data={data} />
    </Container>
  );
};

export default Card;
