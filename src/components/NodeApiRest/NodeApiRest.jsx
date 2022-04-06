import { Grid } from "@material-ui/core";
import { useEffect, useState, useCallback } from "react";
import ListUser from "./ListUser/ListUser";

const NodeApiRest = () => {

    const [listUser, setListUser] = useState([]);

    const fetchUsersHandlers = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:3400/api/users');
            if (!response.ok) {
                throw new Error('Something wnet wrong on your request!');
            }
            const data = await response.json();
            setListUser(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchUsersHandlers();
    }, [fetchUsersHandlers]);


    return (
        <Grid container>
            <ListUser item={listUser} />
        </Grid>
    );
}

export default NodeApiRest;