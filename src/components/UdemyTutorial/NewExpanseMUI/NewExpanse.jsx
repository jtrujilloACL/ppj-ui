import { Grid } from "@material-ui/core";
import ExpanseForm from "./ExpanseForm";

function NewExpanse(props) {

    const onSaveExpenseDataHandler = (enteredExpanseData)=>{
        const expanseData = {
            ...enteredExpanseData,
            id: Math.random().toString()
        };
        props.onAddExpanse(expanseData);
    }

    return (
        <Grid container>

            <Grid item xs={12}>
                <ExpanseForm onSaveExpenseData={onSaveExpenseDataHandler} />
            </Grid>

        </Grid>
    );
}

export default NewExpanse;