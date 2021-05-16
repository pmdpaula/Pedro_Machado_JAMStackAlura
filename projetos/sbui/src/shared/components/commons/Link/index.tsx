/* eslint-disable react/jsx-props-no-spreading */
import get from 'lodash/get';
import NextLink from 'next/link';
// import PropTypes from 'prop-types';
import { ReactNode } from 'react';
import styled from 'styled-components';

// import { Url } from 'url';

export interface LinkProps {
  href: string;
  color: string | undefined;
  children: ReactNode;
}

/* color: inherit; */
const StyledLink = styled.a`
  font-family: ${({ theme }) => theme.fontFamily};
  ${({ theme, color }) =>
    color
      ? `color: ${get(theme, `colors.${color}.color`)}`
      : 'color: inherit;'};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};

  /* transition: opacity 2000ms ease-in-out; */
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

const Link = ({ href, color = undefined, children, ...props }: LinkProps) => (
  <NextLink href={href} passHref>
    <StyledLink color={color} {...props}>
      {children}
    </StyledLink>
  </NextLink>
);

export default Link;

// Link.propTypes = {
//   href: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };
