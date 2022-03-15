import React from 'react';
import { Hidden, makeStyles } from "@material-ui/core";
import Navbar from './Navbar';
import DrawerLeft from './DrawerLeft';
import BoxContainer from './BoxContainer';

const stylesContainer = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    },
}));

function ContainerMain() {

    const classes = stylesContainer();
    const [openState, setOpenState] = React.useState(false);
    // Open and Close Menu Left
    const openCloseDrawer = ()=>{
       setOpenState(!openState); 
    }

    return (
        <div className={classes.root}>

            <Navbar openDrawer={openCloseDrawer} />

            <Hidden xsDown>
                <DrawerLeft
                    variant="permanent"
                    open={true} 
                />
            </Hidden>

            <Hidden smUp>
                <DrawerLeft
                    variant="temporary"
                    open={openState}
                    onClose={openCloseDrawer}
                />
            </Hidden>

            <div className={classes.content}>
                <div className={classes.toolbar}></div>

                <BoxContainer></BoxContainer>

            </div>
        </div>
    );
}

export default ContainerMain;