import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function PoemCard({refresh,poem}) {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex', maxWidth:'650px', minHeight:'300px'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width:'250px' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {poem.poem}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {poem.poet}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="next" onClick={refresh}>
                        {<RefreshIcon />}
                    </IconButton>
                </Box>
            </Box>
            <CardContent sx={{ flex: '1 0 auto', maxWidth: '400px', background: 'linear-gradient(135deg, #f9f1e6 0%, #f9f1e6 49%, #e0d1b9 50%, #e0d1b9 100%)', padding: '20px' }}>
                <Typography component="div" variant="h5">
                    {poem.lyrics}
                </Typography>
            </CardContent>
        </Card>
    );
}