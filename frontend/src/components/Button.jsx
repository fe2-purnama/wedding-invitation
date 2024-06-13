import React from 'react';
import { ButtonStyle } from './StyledBody';

const Button = ({ onClick, children }) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

export default Button;
