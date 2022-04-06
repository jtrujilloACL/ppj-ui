import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { capitalize } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard(props) {
    const { id, name, mail, createdAt, state } = props.props;
    let date = 'N/A';
    if (createdAt) {
        date = createdAt.slice(0,10);
    }

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} key={id}>
            <CardContent >
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {date}
                </Typography>
                <Typography variant="body2" component="p">
                    {mail}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="secondary" variant='outlined'>Ver Perfil</Button>
            </CardActions>
        </Card>
    );
}
