import React from 'react';
import { makeStyles, Drawer, Divider } from "@material-ui/core";
import ListNavbar from './ListNavbar';

const styleDrawer = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },
    toolbar: theme.mixins.toolbar
}));


function DrawerLeft(props) {

    const classes = styleDrawer();

    return (
        <Drawer
            anchor="left"
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
            variant={props.variant}
        >

            <div className={classes.toolbar}></div>
            <Divider />
            <ListNavbar />
            
        </Drawer>
    );
}

export default DrawerLeft;