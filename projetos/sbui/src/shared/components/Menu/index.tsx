// import PropTypes from 'prop-types';
import { ReactNode } from 'react';

import { Logo } from '../../theme/Logo';
import Text from '../foundation/Text';
import {
  MenuWrapper,
  MenuWrapperCSide,
  MenuWrapperLSide,
  MenuWrapperRSide,
} from './styles/MenuWrapper';

export type linksType = {
  texto: string;
  url: string;
}[];

// const links: linksType = [
//   {
//     texto: 'Home',
//     url: '/',
//   },
//   {
//     texto: 'Perguntas frequentes',
//     url: '/faq',
//   },
//   {
//     texto: 'Sobre',
//     url: '/sobre',
//   },
// ];

interface MenuProps {
  arrLinks: linksType;
  children: ReactNode;
}

const Menu = ({ arrLinks, children }: MenuProps) => (
  <MenuWrapper>
    <MenuWrapperLSide>
      <Logo size="small" />
    </MenuWrapperLSide>
    <MenuWrapperCSide>
      {arrLinks.map(link => (
        <li key={link.url}>
          {/* <NextLink href={link.url}>
              <a>
                {link.texto}
              </a>
            </NextLink> */}
          <Text
            variant="smallestException"
            tag="a"
            href={link.url}
            cmsKey={undefined}
          >
            {link.texto}
          </Text>
        </li>
      ))}
    </MenuWrapperCSide>
    <MenuWrapperRSide>{children}</MenuWrapperRSide>
  </MenuWrapper>
);

export default Menu;

// Menu.propTypes = {
//   children: PropTypes.node.isRequired,
// };
