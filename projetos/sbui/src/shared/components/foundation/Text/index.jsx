import get from 'lodash/get';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { WebsitePageContext } from '../../../utils/context';
// eslint-disable-next-line import/no-cycle
import Link from '../../commons/Link';

// interface TextProps {
//   tag: string;
//   href: string;
//   variant: string;
//   children: ReactNode;
//   cmsKey: string;
// }

// interface TextStyleVariantsMapProps {
//   paragraph1: {};
//   smallestException: {};
//   title: {};
// }

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.25;
  `,
  smallestException: css`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1;
  `,
  title: css`
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.25;
    ${breakpointsMedia({
      md: css`
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 1.25;
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

const Text = ({ tag, variant, children, href, cmsKey, ...props }) => {
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
};

export default Text;

Text.propTypes = {
  tag: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  cmsKey: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
  cmsKey: undefined,
};

// p
// h1, h2 ... h6
// span
