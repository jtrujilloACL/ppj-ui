import { createTheme } from "@material-ui/core/styles";
import blueGrey  from '@material-ui/core/colors/blueGrey';

const ThemeCustom = createTheme({
    palette:{
        default:{
            main: blueGrey[500]
        }
    }
})

export default ThemeCustom;