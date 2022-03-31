import { React } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Divider, ListSubheader } from "@material-ui/core";

//Icons
import Assignment from '@mui/icons-material/Assignment';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import AssignmentTurnedIn from '@mui/icons-material/AssignmentTurnedIn';
import FiberNew from '@mui/icons-material/FiberNew';

import { useNavigate } from "react-router-dom";


const ListNavbarLeft = () => {
    const navigate = useNavigate();

    return (
        <List component='nav'
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Proyecto PPJ
                </ListSubheader>
            }
        >

            <ListItem button onClick={() => navigate("/perfil")}>
                <ListItemIcon>
                    <Assignment color="inherit" />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
            </ListItem>

            <ListItem button onClick={() => navigate("/evaluaciones")}>
                <ListItemIcon>
                    <AssignmentInd color="inherit" />
                </ListItemIcon>
                <ListItemText primary="Evaluaciones" />
            </ListItem>

            <ListItem button onClick={() => navigate("/habilidades")}>
                <ListItemIcon>
                    <AssignmentTurnedIn color="inherit" />
                </ListItemIcon>
                <ListItemText primary="Habilidades" />
            </ListItem>


            {/** Tutorials Section*/}
            <Divider />

            <ListSubheader component="div" id="Section-tutorial">
                Tutoriales realizados
            </ListSubheader>

            <ListItem button onClick={() => navigate("/first-tutorial")}>
                <ListItemIcon>
                    <FiberNew color="inherit" />
                </ListItemIcon>
                <ListItemText primary="MUI - Botones" />
            </ListItem>

            <ListItem button onClick={() => navigate("/hidden-tutorial")}>
                <ListItemIcon>
                    <FiberNew color="inherit" />
                </ListItemIcon>
                <ListItemText primary="MUI - Ocultar" />
            </ListItem>

            <ListItem button onClick={() => navigate("/grid-tutorial")}>
                <ListItemIcon>
                    <FiberNew color="inherit" />
                </ListItemIcon>
                <ListItemText primary="MUI - Grid" />
            </ListItem>

            <ListItem button onClick={() => navigate("/udemy-tutorial")}>
                <ListItemIcon>
                    <FiberNew color="inherit" />
                </ListItemIcon>
                <ListItemText primary="Udemy - App Gastos" />
            </ListItem>

            <ListItem button onClick={() => navigate("/node-api-rest")}>
                <ListItemIcon>
                    <FiberNew color="inherit" />
                </ListItemIcon>
                <ListItemText primary="API - Node ts" />
            </ListItem>
        </List>
    );
}

export default ListNavbarLeft;