import { Grid, Typography } from "@material-ui/core";
import CardUser from "../CardUser/CardUser";
const ListUser = (props) => {
    return (
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h4" color="initial">Lista de usuarios</Typography>
                <Grid item xs={1}>
                    {props.item.map((user,key) => (
                        <CardUser
                            key={key}
                            props={user}
                        />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ListUser;