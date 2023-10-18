import React, {useEffect, useState} from "react";
import {Grid, Paper, setRef} from "@mui/material";
import ResponsiveAppBar from "../components/appbar";
import SearchBar from "../components/search";
import ResultCard from "../components/result";
import styles from './home.style.css';
import PoemCard from "../components/poemCard";
import Typography from "@mui/material/Typography";
import axios from "axios";

export default function Home(){

    const [randomPoem,setRandomPoem] = useState({Meaning: undefined, lyrics: undefined,metaphorical_terms: undefined, mood:undefined, poem: undefined, poet: undefined, source_domain: undefined , target_domain: undefined, year: undefined});
    const [refresh, setRefresh] = useState(Math.random() * 76);

    useEffect(() => {
        const getRandPoem = async () =>{
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/elastic/randompoem`);
            const data = res.data;
            console.log(data);
            setRandomPoem({Meaning: data.Meaning,
                lyrics: data.lyrics,
                metaphorical_terms: data["metaphorical terms"], 
                mood:data.mood, 
                poem: data.poem, 
                poet: data.poet, 
                source_domain: data.source_domain , 
                target_domain: data.target_domain, 
                year: data.year})
        }

        getRandPoem();
    },[refresh]);

    const refreshSong = () => {
        const number = Math.floor(Math.random() * 76);
        setRefresh(number);
    }

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
                        justifyContent: 'left'
                    }}
                >
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ResultCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ResultCard />
                    </Grid>
                </Grid>

                <Grid item container xs={12} mt={2} mb = {4} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Grid item mt={2} >
                        <Typography mb={2} variant='h3'>Random Rhymes</Typography>
                        <PoemCard refresh={refreshSong} poem={randomPoem}/>
                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    )
}