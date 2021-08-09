import React from 'react';
import StyledCard, { CardTitle, CardBody, CardFooter } from './card.style';

interface CardProps {
  title: string;
  footer: JSX.Element;
}

const Card: React.FC<CardProps> = ({ title, children, footer }) => {
  return (
    <>
      <StyledCard>
        <CardTitle>{title.toUpperCase()}</CardTitle>
        <CardBody>{children}</CardBody>
        <hr />
        <CardFooter>{footer}</CardFooter>
      </StyledCard>
    </>
  );
};

export default Card;
