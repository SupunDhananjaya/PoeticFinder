import React from "react";
import {Grid, Paper} from "@mui/material";
import ResponsiveAppBar from "../components/appbar";
import SearchBar from "../components/search";
import ResultCard from "../components/result";
import styles from './home.style.css';
import PoemCard from "../components/poemCard";
import Typography from "@mui/material/Typography";

export default function Home(){

    return (
        <Grid container>
            <Grid item xs={12}>
                <ResponsiveAppBar />
            </Grid>
            <Grid item container xs={12} mt={2} padding={1} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>

                <Grid item xs={12}>
                    <Paper variant='elevation' sx={{textAlign:'center', padding: '15px', fontSize: '25px'}}><span className='blue-color'>PoeticFinder</span> is <span className='green-color'>easy</span> to use. Simply enter the <span className='green-color'>keyword</span> or <span className='green-color'>phrase</span> you are looking for in the search bar, and <span className='blue-color'>PoeticFinder</span> will return a list of poems that match your query!</Paper>
                </Grid>
                <Grid item xs={12} mt={2}>
                    <SearchBar />
                </Grid>

                <Grid
                    item
                    container
                    mt={1}
                    xs={12}
                    columnSpacing={3}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'left'
                    }}
                >
                    <Grid item>
                        <ResultCard />
                    </Grid>
                    <Grid item>
                        <ResultCard />
                    </Grid>
                </Grid>

                <Grid item container xs={12} mt={2} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Grid item mt={2} >
                        <Typography mb={2} variant='h3'>Random Rhymes</Typography>
                        <PoemCard />
                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    )
}