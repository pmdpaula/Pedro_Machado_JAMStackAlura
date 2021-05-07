/* eslint-disable react/jsx-props-no-spreading */
import { Box, Grid } from '@pmdpaula/modulo-comum/components/foundation';
import get from 'lodash/get';
import { useState } from 'react';

// import PropTypes from 'prop-types';
// import React from 'react';
// import Footer from '../../commons/Footer';
// import Menu from '../../commons/Menu';
// import Modal from '../../commons/Modal';
// import SEO from '../../commons/SEO';
// import { Box } from '../../foundation/layout/Box';
// import FormCadastro from '../../patterns/FormCadastro';
import { WebsitePageContext } from './context';

export { WebsitePageContext } from './context';

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  messages,
}) {
  const [isModalOpen, setModalState] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        teste: true,
        toggleModalCadastro: () => {
          setModalState(!isModalOpen);
        },
        getCMSContent: cmsKey => get(messages, cmsKey),
      }}
    >
      {/* <SEO {...seoProps} /> */}

      <Grid.Container display="flex" flex="1">
        <Box display="flex" flex="1" flexDirection="column" {...pageBoxProps}>
          {/* <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalState(false);
          }}
        >
          {propsDoModal => <FormCadastro propsDoModal={propsDoModal} />}
        </Modal> */}
          {/* {menuProps.display && (
          <Menu onCadastrarClick={() => setModalState(true)} />
        )} */}
          {children}
          {/* <Footer /> */}
        </Box>
      </Grid.Container>
    </WebsitePageContext.Provider>
  );
}

// WebsitePageWrapper.defaultProps = {
//   seoProps: {},
//   pageBoxProps: {},
//   menuProps: {
//     display: true,
//   },
//   messages: {},
// };

// WebsitePageWrapper.propTypes = {
//   seoProps: PropTypes.shape({
//     headTitle: PropTypes.string,
//   }),
//   menuProps: PropTypes.shape({
//     display: PropTypes.bool,
//   }),
//   pageBoxProps: PropTypes.shape({
//     backgroundImage: PropTypes.string,
//     backgroundRepeat: PropTypes.string,
//     backgroundPosition: PropTypes.string,
//   }),
//   children: PropTypes.node.isRequired,
//   // eslint-disable-next-line react/forbid-prop-types
//   messages: PropTypes.object,
// };
