import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function PoemCard() {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex', maxWidth:'750px', minHeight:'300px'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width:'250px' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        Poem_name
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Poet_name
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </Box>
            </Box>
            <CardContent sx={{ flex: '1 0 auto', maxWidth: '500px', background: 'linear-gradient(135deg, #f9f1e6 0%, #f9f1e6 49%, #e0d1b9 50%, #e0d1b9 100%)', padding: '20px' }}>
                <Typography component="div" variant="h5">
                    Lyrics ..... Lyrics Lyrics ..... Lyrics Lyrics ..... Lyrics Lyrics ..... Lyrics Lyrics ..... Lyrics
                </Typography>
            </CardContent>
        </Card>
    );
}