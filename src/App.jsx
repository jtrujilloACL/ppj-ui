import './App.css';

import FirstTutorial from './components/firstTutorial';
import { ThemeProvider } from "@material-ui/core/styles";
import ThemeCustom from './themeConfig';

function App() {

  return (
    <div>
      {/** Theme   provider, para modificar los styles originales */}
      <ThemeProvider theme={ThemeCustom}>

        <FirstTutorial></FirstTutorial>

      </ThemeProvider>
    </div>
  );
}

export default App;
