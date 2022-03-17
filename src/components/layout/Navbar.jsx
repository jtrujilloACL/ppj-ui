import { React } from "react";
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from "@material-ui/core"
import { useNavigate } from "react-router-dom";

import Menu from "@mui/icons-material/Menu";


const useStyle = makeStyles(ThemeCustom => ({
    offset: ThemeCustom.mixins.toolbar,
    menuButton: {
        marginRight: ThemeCustom.spacing(2),
        [ThemeCustom.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    titleBar: {
        flexGrow: 1
    },
    appBar: {
        [ThemeCustom.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
        },
    }
}))

const Navbar = (props) => {

    const navigate = useNavigate();

    const classes = useStyle();

    return (
        <AppBar position="fixed" color="secondary" className={classes.appBar}>
            <Toolbar>

                <IconButton
                    aria-label={Menu}
                    onClick={ ()=> props.openDrawer() }
                    className={classes.menuButton}
                    color="inherit"
                >

                    <Menu fontSize="large"></Menu>

                </IconButton>

                <Typography variant="h6" className={classes.titleBar} onClick={ () => navigate("/") }>
                    ACL
                </Typography>

                <Button color="inherit" variant="text" onClick={ () => navigate("/login") }>
                    Login
                </Button>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar;