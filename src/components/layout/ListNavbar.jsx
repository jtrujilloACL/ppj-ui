import { React } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";

import  Assignment  from '@mui/icons-material/Assignment';
import  AssignmentInd  from '@mui/icons-material/AssignmentInd';
import  AssignmentTurnedIn  from '@mui/icons-material/AssignmentTurnedIn';


const ListNavbar = () => {
    return (
        <List component='nav'>
            
            <ListItem button>
                <ListItemIcon>
                    <Assignment color="inherit"/>
                </ListItemIcon>
                <ListItemText primary="Perfil" />
            </ListItem>
            
            <ListItem button>
                <ListItemIcon>
                    <AssignmentInd color="inherit"/>
                </ListItemIcon>
                <ListItemText primary="Evaluaciones" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <AssignmentTurnedIn color="inherit"/>
                </ListItemIcon>
                <ListItemText primary="Habilidades" />
            </ListItem> 

            <Divider/>
        </List>
    );
}

export default ListNavbar;