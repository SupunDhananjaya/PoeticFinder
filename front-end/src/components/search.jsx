import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";


export default function SearchBar(){

    return(
        <Grid container spacing={1} alignItems="center">
            <Grid item xs={3}>
                <TextField label="Search by metaphors" color="primary" fullWidth />
            </Grid>
            <Grid item xs={3}>
                <TextField label="Search by lyrics" color="primary" fullWidth />
            </Grid>
            <Grid item xs={3}>
                <TextField label="Search by author" color="primary" fullWidth />
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" color="primary" fullWidth>
                    Search
                </Button>
            </Grid>
        </Grid>
        );
}