import { Box, Typography, Card, makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import ExpenseDateMUI from "./ExpenseDateMUI";

const useStyles = makeStyles({
    root: {
        display: "flex",
        padding: "0.5rem",
        alignItems: "center"
    }
});



function ExpenseItemMUI(props) {

    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <Card
                className={classes.root}
            >

                <Grid item xs={2}>
                    <ExpenseDateMUI date={props.date} />
                </Grid>

                <Grid item xs={10}>
                    <Box
                        display="flex"
                        alignItems="center"
                        m={2}
                        justifycontent="sapce-between"
                    >
                        <Grid item xs={8}>

                            <Typography variant="h4" color="secondary" >
                                {props.title}
                            </Typography>

                        </Grid>

                        <Grid item xs={4}>
                            <Box
                                bgcolor="secondary.main"
                                color="secondary.contrastText"
                                display="flex"
                                justifyContent="flex-end"
                                p={2}
                                border={1}
                                borderColor="#1f2837"
                                borderRadius={16}
                            >
                                <Typography variant="h5" color="initial"> ${props.amount} </Typography>                                
                            </Box>
                        </Grid>

                    </Box>

                </Grid>

            </Card>
        </Grid>
    );
}

export default ExpenseItemMUI;