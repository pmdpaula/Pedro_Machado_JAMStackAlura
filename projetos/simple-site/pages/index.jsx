// import SimpleButton from '@pmdpaula/modulo-comum/components/SimpleButton';
import { Box } from '@pmdpaula/modulo-comum/components/foundation';
import { Text } from '@pmdpaula/modulo-comum/components/foundation/Text';
import { SimpleButton } from '@pmdpaula/sbui/src/components/SimpleButton';
import styled from 'styled-components';

// import websitePageHOC from '../src/components/wrappers/WebsitePage';
import websitePageHOC from '../src/components/WebsitePage/hoc/index';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Home = () => (
  // const { defaultStyles } = useContext<DefaultTheme>(ThemeContext);
  // console.log(defaultStyles);

  <>
    <Box>
      <Title>Land Page</Title>
      <Text tag="h1">Botão simples</Text>
      <SimpleButton>Botão simples do Monorepo</SimpleButton>
    </Box>
    <Box>
      <Text tag="h1">Botão simples passando valores de cor</Text>
      <SimpleButton bgColor="#de3265" bgHColor="#82ea45">
        Botão simples do Monorepo
      </SimpleButton>
    </Box>
  </>
);

// export default Home;
export default websitePageHOC(Home);
