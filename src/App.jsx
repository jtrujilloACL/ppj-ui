import './App.css';

import FirstTutorial from './components/FirstTutorial';
import Navbar from './components/layout/Navbar';
import ListNavbar  from './components/layout/ListNavbar';
import HiddenList from './components/layout/HiddenList';

import { ThemeProvider } from "@material-ui/core/styles";
import ThemeCustom from './themeConfig';
import ContainerMain from './components/layout/ContainerMain';

function App() {

  return (
    <div>
      {/** Theme   provider, para modificar los styles originales */}
      <ThemeProvider theme={ThemeCustom}>

        <ContainerMain></ContainerMain>

      </ThemeProvider>
    </div>
  );
}

export default App;
