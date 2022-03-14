import { Fragment, React } from "react";

import Button from '@material-ui/core/Button';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import { Icon, IconButton, Typography } from "@material-ui/core";
import { Pets, Cloud } from '@mui/icons-material';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({

    buttonCustom: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }

});

const FirstTutorial = () => {

    const classes = useStyle();

    return (
        <Fragment>

            <Button color="default">
                Default
            </Button>

            <Button color="primary">
                Primary
            </Button>

            <Button color="secondary">
                Secondary
            </Button>

            <Button
                color="secondary"
                variant="contained">
                contained secondary
            </Button>

            <Button
                color="primary"
                variant="outlined">
                Outlined Primary
            </Button>

            <Button
                color="primary"
                variant="contained"
                disableElevation>
                DisabledElevation
            </Button>

            <Button
                color="default"
                variant="contained"
                disableElevation
                href='https://mui.com/components/buttons/'>
                MUI
            </Button>

            <Button
                color="secondary"
                variant="contained"
                fullWidth>
                Full Width
            </Button>

            <Button
                color="primary"
                variant="outlined"
                size='small'>
                small
            </Button>

            <Button
                color="primary"
                variant="outlined"
                size='medium'>
                medium
            </Button>

            <Button
                color="primary"
                variant="outlined"
                size='large'>
                large
            </Button>

            {/**Icon SVG */}
            <AddToDriveIcon />

            <AddToDriveIcon
                color="warning"
            >
            </AddToDriveIcon>

            <Button
                color='primary'
                variant='outlined'
                startIcon={<Pets />}
                endIcon={<Pets />}
            >
                Mascota
            </Button>

            {/**Icon span */}
            <Icon color='primary'>fingerprint</Icon>

            <Button
                color='primary'
                variant='outlined'
                startIcon={<Icon>vpn_key</Icon>}
                endIcon={<Icon>vpn_key</Icon>}
            >
                Clave
            </Button>


            <IconButton aria-label="cloud_off">
                <Cloud color='primary'></Cloud>
            </IconButton>

            <IconButton aria-label="cloud_off" color='secondary'>
                <Icon>cloud_off</Icon>
            </IconButton>


            {/** Tipografia */}
            <Typography variant="h1" color="initial" paragraph>
                Tipografia h1
            </Typography>
            <Typography variant="h1" color="primary" align='center'>
                Primary
            </Typography>
            <Typography variant="body1" color="secondary" align='right'>
                Secondary body1 right
            </Typography>

            {/**Styles */}
            <Button className={classes.buttonCustom}
            >
                Custom Button
            </Button>

        </Fragment>
    );
}

export default FirstTutorial;