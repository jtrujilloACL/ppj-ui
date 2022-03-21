import { Card, Grid, makeStyles } from "@material-ui/core";
import ExpanseItemMUI from "./ExpenseItemMUI";


const useStyles = makeStyles( {
    root: {
      backgroundColor: '#1f2837',
      border:5,
      borderColor: "#ffffff",
      padding:"1rem",
      margin:2
    },
});


function ExpensesMUI(props) {

    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} md={12}>
                <Card
                    className={classes.root}
                    variant="outlined"
                >
                    <ExpanseItemMUI
                        title={props.items[0].title}
                        amount={props.items[0].amount}
                        date={props.items[0].date}
                    />
                </Card>
            </Grid>
        </Grid>
    );
}

export default ExpensesMUI;