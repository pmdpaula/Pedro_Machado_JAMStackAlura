// import { css, styled } from 'styled-components';
// import SimpleButton from '@pmdpaula/modulo-comum/components/SimpleButton';
import { Box } from '@pmdpaula/sbui/src/shared/components/foundation/layout/Box';
import Text from '@pmdpaula/sbui/src/shared/components/foundation/Text';
import { SimpleButton } from '@pmdpaula/sbui/src/shared/components/commons/SimpleButton';


// import websitePageHOC from '../src/components/wrappers/WebsitePage';
import websitePageHOC from '../src/components/WebsitePage/hoc/index';
import Button from '@pmdpaula/sbui/src/shared/components/commons/Button';
import Link from '@pmdpaula/sbui/src/shared/components/commons/Link';


// const Title = styled.h1`
//   color: red;
//   font-size: 50px;
// `;

const Home = () => (
  // const { defaultStyles } = useContext<DefaultTheme>(ThemeContext);
  // console.log(defaultStyles);

  <>
    <Box>
      <h1>Land Page</h1>
      <Text tag="h1">Botão base</Text>
      <Button>Botão base do Monorepo</Button>
    </Box>
    <Box>
      <Text tag="h1">Botão simples passando valores de cor</Text>
      <SimpleButton bgColor="#de3265" bgHColor="#82ea45">
        Botão simples do Monorepo
      </SimpleButton>
    </Box>
    <Box>
      <Text tag="h1">Link</Text>
      <Link href="">
        Botão simples do Monorepo
      </Link>
    </Box>
  </>
);

// export default Home;
export default websitePageHOC(Home);
