import {Grid, TextField} from "@mui/material";
import Button from "@mui/material/Button";


export default function SearchBar({setMetaphor,setLyrics,setAuthor}){

    const handleChange = (event) => {
        const id = event.target.id;
        const val = event.target.value;

        if(id==='metaphor'){
            setMetaphor(val);
        }else if(id==='lyrics'){
            setLyrics(val);
        }else if(id==='author'){
            setAuthor(val);
        }
    }

    return(
        <Grid container spacing={1} alignItems="center">
            <Grid item xs={3}>
                <TextField id='metaphor' onChange={handleChange} label="Search by metaphors" color="primary" fullWidth />
            </Grid>
            <Grid item xs={3}>
                <TextField id='lyrics' onChange={handleChange} label="Search by lyrics" color="primary" fullWidth />
            </Grid>
            <Grid item xs={3}>
                <TextField id='author' onChange={handleChange} label="Search by author" color="primary" fullWidth />
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" color="primary" fullWidth>
                    Search
                </Button>
            </Grid>
        </Grid>
        );
}