/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

type SimpleButtonProps = {
  bgColor: string;
};

const SimpleButtonWrapper = styled.button<SimpleButtonProps>`
  border: 0.2rem solid black;
  padding: 0.5rem;
  background: ${props => props.bgColor};

  &:hover {
    background: gray;
  }
`;

// const SimpleButton = ({ children }) => (
//   <SimpleButtonWrapper>{children}</SimpleButtonWrapper>
// );
export const SimpleButton = ({ bgColor }) => (
  <SimpleButtonWrapper bgColor={bgColor}>Botão simples</SimpleButtonWrapper>
);
