import React from "react";
import {Grid} from "@mui/material";
import ResponsiveAppBar from "../components/appbar";
import SearchBar from "../components/search";
import ResultCard from "../components/result";

export default function Home(){

    return (
        <Grid container>
            <Grid item xs={12}>
                <ResponsiveAppBar />
            </Grid>
            <Grid item container xs={12} mt={2} padding={1}>
                <Grid item xs={12}>
                    <SearchBar />
                </Grid>

                <Grid item container mt={1} xs={12} columnSpacing={3}>
                    <Grid item>
                        <ResultCard />
                    </Grid>
                    <Grid item>
                        <ResultCard />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}