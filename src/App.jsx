import './App.css';

import FirstTutorial from './components/FirstTutorial';
import Navbar from './components/layout/Navbar';
import ListNavbar  from './components/layout/ListNavbar';

import { ThemeProvider } from "@material-ui/core/styles";
import ThemeCustom from './themeConfig';

function App() {

  return (
    <div>
      {/** Theme   provider, para modificar los styles originales */}
      <ThemeProvider theme={ThemeCustom}>

        <Navbar></Navbar>

        <FirstTutorial></FirstTutorial>

        <ListNavbar></ListNavbar>

      </ThemeProvider>
    </div>
  );
}

export default App;
