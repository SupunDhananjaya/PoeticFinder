import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import {useState} from "react";

export default function ResultCard() {

    const [isHidden,setIsHidden] = useState(true);

    const changeVisibility = () =>{
        setIsHidden(!isHidden);
    }

    return (
        <Card >
            <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/345/140"
                title="{keyword}"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    Poem_name
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    Poet_name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    I wake up to the sounds of the silence that allows
                    For my mind to run around with my ear up to the ground
                    I'm searching to behold the stories that are told
                    When my back is to the world that was smiling when I turned
                </Typography>

                <Grid item hidden={isHidden} mt={2}>
                    <Typography variant="h6" color="text.secondary">
                        Poet:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Poet_name
                    </Typography>

                    <Typography variant="h6" color="text.secondary" mt={2}>
                        Metaphors:
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={1}>
                        Metaphor - meaning
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Subject: subject, Object: object
                    </Typography>

                    <Typography variant="body2" color="text.secondary" mt={1}>
                        Metaphor - meaning
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Subject: subject, Object: object
                    </Typography>

                    <Typography variant="h6" color="text.secondary" mt={2}>
                        Year:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        year
                    </Typography>

                </Grid>
            </CardContent>
            <CardActions>
                <Button onClick={changeVisibility} size="small">Read More</Button>
            </CardActions>
        </Card>
    );
}