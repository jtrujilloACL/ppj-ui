import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlined from '@mui/icons-material/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://www.aclti.com/">
        ACL
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '75vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {

  /* State Forms */
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [btnSubmitState, setBtnSubmitState] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  /* Handlers events */
  const emailChangeHandler = (event) => {
    setEmailState(event.target.value);
    console.log(emailState);
  }
  const passwordChangeHandler = (event) => {
    setPasswordState(event.target.value);
    console.log(passwordState);
  }

  const submitChangeHandler = (event) => {
    //TODO: API Node auntethication
    try {
      event.preventDefault();
      setData({
        email: emailState,
        password: passwordState,
      });
      console.log(data);
      //TODO: promise wait for response to clean form
      //setEmailState('');
      //setPasswordState('');
      setBtnSubmitState(false);

    } catch (error) {
      console.log("error submitChangeHandler submit");
      console.log(error);

    }
  }

  const enableSubmitHandler = () => {
    let aux = (emailState !== '' && passwordState !== '') ? true : false;
    setBtnSubmitState(aux);
  }
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={2} md={3} lg={3} ></Grid>
      <Grid item xs={12} sm={8} md={6} lg={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
              autoComplete="email"
              onChange={emailChangeHandler}
              onBlur={enableSubmitHandler}
              value={emailState}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={passwordChangeHandler}
              onBlur={enableSubmitHandler}
              value={passwordState}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Recordarme"
            />
            <Button
              disabled={!btnSubmitState}
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={submitChangeHandler}
            >
              Iniciar Sesión
            </Button>
            <Grid container>
              <Grid item xs={12} md={5}>
                <Link href="#" variant="body2" color='secondary'>
                  Olvidaste contraseña?
                </Link>
              </Grid>

              <Grid item xs={false} md={3} />

              <Grid item xs={12} md={4}>
                {/* <Link href="#" variant="body2" color='secondary'>
                  {"No tienes cuenta? Registrarse"}
                </Link> */}
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}