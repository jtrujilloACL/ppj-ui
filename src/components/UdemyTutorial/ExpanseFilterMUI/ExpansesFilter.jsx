import { FormControl, InputLabel, Select, MenuItem, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

/** Style css */
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 210,
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
}));


const ExpensesFilter = (props) => {


    const [year, setYear] = useState('');

    const onSelectYearHanddler = (event) => {
        let value = event.target.value;
        setYear(value);
        props.onFilterYear(event.target.value);
    };

    const classes = useStyles();

    return (

        <div >
            <Grid container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                {/**className='expenses-filter__control' */}
                <Grid item xs={3} >

                    <FormControl className={classes.formControl} variant="outlined" id="filter-expense-from-control">
                        <InputLabel id="filter-expenses-label" >Filtro por año</InputLabel>
                        <Select
                            labelId='filter-expenses-label'
                            id='filter-expenses-select'
                            value={year}
                            onChange={onSelectYearHanddler}
                            label="Filtro por año" /* Solv: Error sobre outlined */

                        >
                            <MenuItem value=""> <em>None</em>  </MenuItem>
                            <MenuItem value='2022' >2022</MenuItem>
                            <MenuItem value='2021' >2021</MenuItem>
                            <MenuItem value='2020' >2020</MenuItem>
                            <MenuItem value='2019' >2019</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>
            </Grid>
        </div>
    );
};

export default ExpensesFilter;