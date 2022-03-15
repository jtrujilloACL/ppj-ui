import { React } from "react";
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from "@material-ui/core"
import Menu from "@mui/icons-material/Menu";


const useStyle = makeStyles(ThemeCustom => ({
    offset: ThemeCustom.mixins.toolbar,
    menuButton: {
        marginRight: ThemeCustom.spacing(2)
    },
    titleBar : {
        flexGrow: 1
    }
}))

const Navbar = () => {

    const classes = useStyle();

    return (
        <div>
            <AppBar position="fixed" color="secondary">
                <Toolbar>

                    <IconButton
                        aria-label={Menu}
                        onClick={console.log("click menu bar")}
                        className={classes.menuButton}
                        color="inherit"
                    >

                        <Menu fontSize="large"></Menu>

                    </IconButton>

                    <Typography variant="h6" className={classes.titleBar}>
                        ACL
                    </Typography>

                    <Button color="inherit" variant="text">
                        Perfil
                    </Button>

                </Toolbar>
            </AppBar>

            <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar;