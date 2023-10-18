import React from "react";
import {Grid, Paper, Typography} from "@mui/material";
import ResponsiveAppBar from "../components/appbar";
import styles from './about.style.css';
import overview from '../assests/images/overview.jpg'

export default function AboutPage(){
    return(
        <Grid container>
            <Grid item xs={12}>
                <ResponsiveAppBar />
            </Grid>
            <Grid item container xs={12} mt={5}> 

                <Grid item xs={12} >
                    <Typography variant="h2">About <span className="blue-color">PoeticFinder</span></Typography>
                </Grid>

                <Grid item xs={12} mt={3}>
                    <Paper elevation={3}>
                        <Grid container xs={12} spacing={3}>
                            <Grid item xs={12} md={4}>
                                <img src={overview} style={{ height: '100%' }} alt="Overview" />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Typography variant="h3">
                                        Overview
                                </Typography>
                                <Typography variant="h5">
                                    Welcome to PoeticFinder, the search application for finding sinhala poems and metaphors in Sinhala poems. 
                                    The goal of this application is to provide a user-friendly platform for poets, literary enthusiasts, and anyone who appreciates the beauty of language to discover new and inspiring works of poetry. 
                                    With PoeticFinder, you can search for poems by poem name, lyrics, author, and other relevant details, making it easy to find the perfect poem for any occasion.
                                </Typography>

                                <Typography variant="h3" mt={3}>
                                    Features
                                </Typography>
                                <Typography variant="h5">
                                - Search for poems by subject, mood, author, and other relevant details
                                </Typography>
                                <Typography variant="h5">
                                - Discover new and inspiring works of poetry
                                </Typography>
                                <Typography variant="h5">
                                - Find metaphors that spark your creativity
                                </Typography>
                                <Typography variant="h5">
                                - Deepen your appreciation for the art form
                                </Typography>
                                <Typography variant="h5">
                                - Access detailed attributes for each poem, providing valuable context for analysis and interpretation
                                </Typography>

                                <Typography variant="h3" mt={3}>
                                    Development
                                </Typography>
                                <Typography variant="h5">
                                The project was completed as part of the CS4642 Data Mining & Information Retrieval course. The team utilized  ElasticSearch, React, and Nodejs to build the search application and corpus of Sinhala poems.
                                </Typography>

                                <Typography variant="h3" mt={3}>
                                    Contact
                                </Typography>
                                <Typography variant="h5">
                                We would love to hear from you! If you have any questions, feedback, or suggestions for improvement, please don't hesitate to reach out to us. You can contact us via email at supun.19@cse.mrt.ac.lk
                                </Typography>

                                


                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            
            </Grid>

        </Grid>
    )
}