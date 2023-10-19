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
    const [metaphor,setMetaphor] = useState('');
    const [lyrics,setLyrics] = useState('');
    const [author,setAuthor] = useState('');
    const [poemName,setPoemName] = useState('');
    const [result,setResult] = useState([]);

    const mergeEntries = (entries) => {
        const result = {};
      
        entries.forEach(entry => {
          const key = `${entry.poem}-${entry.poet}-${entry.year}-${entry.mood}-${entry.lyrics}`;
      
          if (!result[key]) {
            result[key] = { ...entry, metaphors: [] };
          }
      
          result[key].metaphors.push(...entry.metaphors);
        });
      
        return Object.values(result);
      };


    const handleSearch = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/elastic/search`,{
                params : {
                    metaphor: metaphor,
                    lyrics: lyrics,
                    author: author,
                    poem: poemName
                }
            });
            
            const result_ = [];
            for(let i = 0; i < response.data.length; i ++){
                const new_poem = response.data[i]._source;
                result_.push({    
                    poem: new_poem.poem,
                    poet: new_poem.poet,
                    lyrics: new_poem.lyrics,
                    year: new_poem.year,
                    mood: new_poem.mood,
                    metaphors: [{
                        source_domain: new_poem.source_domain,
                        target_domain: new_poem.target_domain,
                        metaphorical_term: new_poem['metaphorical terms'],
                        meaning: new_poem.Meaning
                    }]
                });
            }

            const mergedResult = mergeEntries(result_);
            setResult(mergedResult);

        } catch (error) {
            alert(error);
        }
        // setLyrics('');
        // setAuthor('');
        // setMetaphor('');
    }

    useEffect(() => {
        const getRandPoem = async () =>{
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/elastic/randompoem`);
            const data = res.data;
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
                    <SearchBar metaphor={metaphor} lyrics={lyrics} poemName={poemName} author={author} setPoemName={setPoemName} setMetaphor={setMetaphor} setLyrics={setLyrics} setAuthor={setAuthor} handleSearch={handleSearch}/>
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
                    {result.map((poem,index) => (
                        <Grid item key={index} id={index} xs={12} sm={6} md={4} lg={3} mt={2}>
                            <ResultCard poem={poem} />
                        </Grid>
                    ))}
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