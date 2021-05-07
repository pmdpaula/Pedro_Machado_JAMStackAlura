import get from 'lodash/get';
import { useContext } from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { WebsitePageContext } from '../../../infra/context';
import breakpointsMedia from '../../../styles/utils/breakpointsMedia';
import propToStyle from '../../../styles/utils/propToStyle';
import { Link } from '../../Link';

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.smallestException.lineHeight};
  `,
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
      md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
    })}
  `,
};

const TextBase = styled.span`
  ${props => TextStyleVariantsMap[props.variant]}
  color: ${props => get(props.theme, `colors.${props.color}.color`)};

  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}
`;

export function Text({ tag, variant, children, href, cmsKey, ...props }) {
  const websitePageContext = useContext(WebsitePageContext);

  const componentContent = cmsKey
    ? websitePageContext.getCMSContent(cmsKey)
    : children;

  if (href) {
    return (
      <TextBase
        as={Link}
        href={href}
        variant={variant}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {componentContent}
      </TextBase>
    );
  }

  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      // style
      // className
      // e ai vai
    >
      {componentContent}
    </TextBase>
  );
}

// Text.propTypes = {
//   tag: PropTypes.string,
//   href: PropTypes.string,
//   variant: PropTypes.string,
//   children: PropTypes.node,
//   cmsKey: PropTypes.string,
// };

// Text.defaultProps = {
//   tag: 'span',
//   variant: 'paragraph1',
//   children: null,
//   href: '',
//   cmsKey: undefined,
// };

// p
// h1, h2 ... h6
// span
