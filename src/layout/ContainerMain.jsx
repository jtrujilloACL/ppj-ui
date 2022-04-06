import React from 'react';
import { Hidden, makeStyles } from "@material-ui/core";
import Navbar from './Navbar';
import MenuLeft from './MenuLeft';

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

const ContainerMain = (props)=> {

    const classes = stylesContainer();
    const [openState, setOpenState] = React.useState(false);
    // Open and Close Menu Left
    const openCloseDrawer = ()=>{
       setOpenState(!openState); 
    }

    return (
        <div className={classes.root}>
            {/** Nav Bar **/}
            <Navbar openDrawer={openCloseDrawer} />

            {/** Left Menu - Hidden minor xs **/}
            <Hidden xsDown>
                <MenuLeft
                    variant="permanent"
                    open={true} 
                />
            </Hidden>

            {/** Left Menu - Hidden on click **/}
            <Hidden smUp>
                <MenuLeft
                    variant="temporary"
                    open={openState}
                    onClose={openCloseDrawer}
                />
            </Hidden>

            {/** Offset and Main page **/}
            <div className={classes.content}>
                <div className={classes.toolbar}></div>

                {props.children}

            </div>
        </div>
    );
}

export default ContainerMain;