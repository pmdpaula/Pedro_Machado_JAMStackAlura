/* eslint-disable import/prefer-default-export */
import { ReactNode } from 'react';
import styled from 'styled-components';

interface SimpleButtonProps {
  bgColor?: string;
  bgHColor?: string;
  children: ReactNode;
}

const SimpleButtonWrapper = styled.button<SimpleButtonProps>`
  border: 0.2rem solid black;
  padding: 0.5rem;
  background: ${props => props.bgColor};

  &:hover {
    background: ${props => props.bgHColor};
  }
`;

// const SimpleButton = ({ children }) => (
//   <SimpleButtonWrapper>{children}</SimpleButtonWrapper>
// );
export const SimpleButton = ({
  bgColor = '#09f',
  bgHColor = '#07f',
  children,
}: SimpleButtonProps) => (
  <SimpleButtonWrapper bgColor={bgColor} bgHColor={bgHColor}>
    {children}
  </SimpleButtonWrapper>
);
