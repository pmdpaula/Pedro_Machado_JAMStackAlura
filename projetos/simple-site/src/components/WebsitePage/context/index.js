/* eslint-disable import/prefer-default-export */
import { createContext } from 'react';

export const WebsitePageContext = createContext({
  toggleModalCadastro: () => {},
  getCMSContent: cmsKey => cmsKey,
});
