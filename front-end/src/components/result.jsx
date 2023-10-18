import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import {useState} from "react";

export default function ResultCard({poem}) {

    const [isHidden,setIsHidden] = useState(true);
    const [seed] = useState(Math.floor(Math.random() * 1085));

    const changeVisibility = () =>{
        setIsHidden(!isHidden);
    }

    return (
        <Card >
            <CardMedia
                sx={{ height: 140 }}
                image={`https://picsum.photos/id/${seed}/345/140`}
                title="{keyword}"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {poem.poem}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {poem.poet}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {poem.lyrics}
                </Typography>

                <Grid item hidden={isHidden} mt={2}>
                <Typography variant="h6" color="text.secondary" mt={2}>
                        Metaphors:
                    </Typography>
                    {poem.metaphors.map((metaphor,index)=> (
                        <Grid item id={index}>
                            <Typography variant="body2" color="text.secondary" mt={1}>
                                {metaphor.metaphorical_term} - {metaphor.meaning}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Subject: {metaphor.source_domain}, Object: {metaphor.target_domain}
                            </Typography>
                        </Grid>    
                    ))}

                    <Typography variant="h6" color="text.secondary" mt={2}>
                        Year:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {poem.year}
                    </Typography>

                </Grid>
            </CardContent>
            <CardActions>
                <Button onClick={changeVisibility} size="small">Read More</Button>
            </CardActions>
        </Card>
    );
}