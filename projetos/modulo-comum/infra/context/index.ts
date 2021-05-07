/* eslint-disable import/prefer-default-export */
import React from 'react';

export const WebsitePageContext = React.createContext({
  toggleModalCadastro: () => {},
  getCMSContent: (cmsKey: any) => cmsKey,
});

// interface WebsitePageContextProps {
//   toggleModalCadastro: Function;
//   getCMSContent: Function
// }
