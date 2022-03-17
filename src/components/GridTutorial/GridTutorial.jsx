import { Box, Grid } from "@material-ui/core";

const GridTutorial = () => {
    return (
        <Grid container>

            <Grid item xs={12} md={12}>
                <Box
                    color="secondary.contrastText"
                    bgcolor="secondary.main"
                    p={5}
                    m={1}
                >
                    Box0
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>
                <Box
                    color="secondary.contrastText"
                    bgcolor="secondary.main"
                    p={5}
                    m={1}
                >
                    Box1
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>
                <Box
                    color="secondary.contrastText"
                    bgcolor="secondary.main"
                    p={5}
                    m={1}
                >
                    Box2
                </Box>
            </Grid>

            <Grid item xs={6} md={4}>
                <Box
                    color="secondary.contrastText"
                    bgcolor="secondary.main"
                    p={5}
                    m={1}
                >
                    Box3
                </Box>
            </Grid>

            <Grid item xs={6} md={4}>
                <Box
                    color="secondary.contrastText"
                    bgcolor="secondary.main"
                    p={5}
                    m={1}
                >
                    Box4
                </Box>
            </Grid>

            <Grid item xs={12} md={4}>
                <Box
                    color="secondary.contrastText"
                    bgcolor="secondary.main"
                    p={5}
                    m={1}
                >
                    Box5
                </Box>
            </Grid>

        </Grid>
    );
}

export default GridTutorial;