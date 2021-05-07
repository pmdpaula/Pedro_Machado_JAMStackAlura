// import SimpleButton from '@pmdpaula/modulo-comum/components/SimpleButton';
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
    <Title>Land Page</Title>
    <SimpleButton bgColor="#de3265" />
  </>
);

// export default Home;
export default websitePageHOC(Home);
