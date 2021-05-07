/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line simple-import-sort/imports
import get from 'lodash/get';
import NextLink from 'next/link';
import styled from 'styled-components';
import { ReactNode } from 'react';

const StyledLink = styled.a`
  color: inherit;
  ${({ theme, color }) =>
    color
      ? `color: ${get(theme, `colors.${color}.color`)}`
      : 'color: inherit;'};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

interface LinkProps {
  href: string;
  children: ReactNode;
}

export const Link = ({ href, children, ...props }: LinkProps) => (
  <NextLink href={href} passHref>
    <StyledLink {...props}>{children}</StyledLink>
  </NextLink>
);

// export default Link;
