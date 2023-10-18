import React, { useEffect, useState } from "react";
import {Grid} from "@mui/material";
import ResponsiveAppBar from "../components/appbar";
import ResultCard from "../components/result";
import axios from "axios";

export default function PoemsPage(){

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

    useEffect(()=> {
        const getAllPoems = async() => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_API}/api/elastic/getAllPoems`);

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
            }catch(error){
                alert(error);
            }
            

        }

        getAllPoems();
    },[]);
    return(
        <Grid container>
            <Grid item xs={12}>
                <ResponsiveAppBar />
            </Grid>
            <Grid item container xs={12} mt={2}> 
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
                        <Grid item id={index} xs={12} sm={6} md={4} lg={3} mt={2}>
                            <ResultCard poem={poem} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>

        </Grid>
    )
}