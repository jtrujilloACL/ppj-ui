import './App.css';

import FirstTutorial from './components/FirstTutorial';
import Navbar from './components/Navbar';

import { ThemeProvider } from "@material-ui/core/styles";
import ThemeCustom from './themeConfig';

function App() {

  return (
    <div>
      {/** Theme   provider, para modificar los styles originales */}
      <ThemeProvider theme={ThemeCustom}>

        <Navbar></Navbar>
        <FirstTutorial></FirstTutorial>

      </ThemeProvider>
    </div>
  );
}

export default App;
