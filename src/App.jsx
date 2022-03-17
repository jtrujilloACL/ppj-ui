import './App.css';

import { ThemeProvider } from "@material-ui/core/styles";
import ThemeCustom from './themeConfig';
import { BrowserRouter} from "react-router-dom";
import ContainerMain from './components/layout/ContainerMain';
import PageContainer from './components/PageContainer';

const App = () => {

  return (
    <div>

      {/** Theme   provider, modify styles MUI */}
      <ThemeProvider theme={ThemeCustom}>

        {/** Provider for Routing */}
        <BrowserRouter>

          {/**
           * Provider Nav Bar and Menu left
           * @See the-concept-of-composition React
           * Wrapper "Envoltorio" Routes and Routing
           */}
          <ContainerMain>

            <PageContainer/>

          </ContainerMain>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
