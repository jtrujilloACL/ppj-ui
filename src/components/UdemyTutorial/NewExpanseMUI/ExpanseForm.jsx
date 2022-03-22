import { Fab, FormControl, Grid, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField } from "@material-ui/core";
import Add from "@mui/icons-material/Add";
import clsx from 'clsx';
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {

    },
    fab: {

    },
}));

const ExpanseForm = (props)=>{

    const [titleExpanseForm, setTitleExpanseForm] = useState('');
    const [dateExpanseFom, setDateExpanseFom] = useState('');
    const [amountExpanseForm, setAmountExpanseForm] = useState('');

    const titleChangeHandler = (event) => {
        setTitleExpanseForm(event.target.value);
        console.log("setTitleExpanseForm", event.target.value);
    };
    const dateChangeHandler = (event) => {
        setDateExpanseFom(event.target.value);
        console.log("setDateExpanseFom", event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmountExpanseForm(event.target.value);
        console.log("setAmountExpanseForm", event.target.value);
    };

    const classes = useStyles();

    const fab = {
        color: 'secondary',
        className: classes.fab,
        icon: <Add />,
        label: 'Agregar',
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            title: titleExpanseForm,
            date: new Date(dateExpanseFom),
            amount: amountExpanseForm,
        }
        props.onSaveExpenseData(data);
        setTitleExpanseForm('');
        setDateExpanseFom('');
        setAmountExpanseForm('');
    };


    return (
        <Grid item xs={10}>
            <form noValidate autoComplete="off" id="form-expense">

                <Grid container>
                    {/** Input Titulo del gasto */}
                    <Grid item xs={5}>

                        <TextField
                            label="Titulo del gasto"
                            id="title-expanse"
                            className={clsx(classes.margin, classes.textField)}
                            variant="outlined"
                            onChange={titleChangeHandler}
                            value={titleExpanseForm}
                        />
                    </Grid>


                    {/** Input Fecha del gasto */}
                    <Grid item xs={5}>

                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                            <TextField
                                id="date-expanse"
                                label="Fecha del gasto"
                                type="date"
                                defaultValue=""
                                variant="outlined"
                                onChange={dateChangeHandler}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </FormControl>
                    </Grid>

                    {/** Button Agregar nuevo gasto */}
                    <Grid item xs={2}>

                        <Fab
                            aria-label="button-expanse"
                            className={fab.className}
                            color={fab.color}
                            onClick={submitHandler}
                        >
                            {fab.icon}
                        </Fab>
                    </Grid>

                </Grid>

                <Grid item xs={11}>

                    {/** Input Monto del gasto */}
                    <FormControl fullWidth className={classes.margin} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Monto</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            labelWidth={60}
                            onChange={amountChangeHandler}
                            value={amountExpanseForm}
                        />
                    </FormControl>
                </Grid>
            </form>
        </Grid>
    );
}

export default ExpanseForm;