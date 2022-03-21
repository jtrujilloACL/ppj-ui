import { Box, capitalize } from "@material-ui/core";


const ExpenseDateMUI = (props) => {
    const month = capitalize(props.date.toLocaleString('es-VE', { month: 'long' }));
    const day = capitalize(props.date.toLocaleString('es-VE', { day: '2-digit' }));
    const year = props.date.getFullYear();

    return (
        <Box
            bgcolor="secondary.main"
            color="secondary.contrastText"
            width="5.5rem"
            py={{ xs: 1, sm: 1, md: 1 }}
            borderRadius={16}
            border={2}
            borderColor="#1f2837"
            textAlign="center"
            fontSize="1rem"
        >
            <Box
                fontSize={{ xs: '0.9rem', sm: '0.9rem', md: '0.9rem' }}
                fontWeight="bold"
            > {month} </Box>

            <Box
                fontSize={{ xs: '0.8rem', sm: '0.8rem', md: '0.8rem' }}
            >{year}</Box>

            <Box
                fontSize={{ xs: '1.2rem', sm: '1.2rem', md: '1.2rem'}}
                fontWeight="bold"
            > {day} </Box>

        </Box>
    );
}

export default ExpenseDateMUI;