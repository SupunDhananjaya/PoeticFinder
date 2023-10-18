import React from "react";
import {Grid} from "@mui/material";
import ResponsiveAppBar from "../components/appbar";

export default function MetaphorsPage(){
    return(
        <Grid container>
            <Grid item xs={12}>
                <ResponsiveAppBar />
            </Grid>
            <Grid item container xs={12}> Metaphors page</Grid>

        </Grid>
    )
};