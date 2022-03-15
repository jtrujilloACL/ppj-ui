import React from 'react';
import { withWidth, Typography, Hidden, Button } from "@material-ui/core";

function HiddenList(props) {
    return ( 
        <div>
            <Typography variant="h6" color="initial">
                Ancho: {props.width}
            </Typography>
            
            <Hidden smDown>
                <Button variant="contained" color="primary">md</Button>
            </Hidden>

            <Hidden only={['xs','xl']}>
                <Button variant="contained" color="primary">xs - xs</Button>
            </Hidden>
        </div>
     );
}

export default withWidth()(HiddenList);