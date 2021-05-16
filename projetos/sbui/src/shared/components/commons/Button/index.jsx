/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

import Link from '../Link';
import { ButtonWrapper } from './styles/ButtonWrapper';

const Button = ({ href, children, ...props }) => {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';
  return (
    <ButtonWrapper as={tag} href={href} {...props}>
      {children}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  href: undefined,
  variant: undefined,
};

// Variant.propTypes = {
//   variant: PropTypes.oneOf(['primary.main', 'secondary.main', 'tertiary.main']),
// };

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary.main', 'secondary.main', 'tertiary.main']),
};

export default Button;
