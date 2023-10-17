import {Grid} from "@mui/material";
import React from "@types/react";
import ResponsiveAppBar from "../components/appbar";

export default function aboutPage(){
    return(
        <Grid container>
            <Grid item xs={12}>
                <ResponsiveAppBar />
            </Grid>
            <Grid item container xs={12}> About page</Grid>

        </Grid>
    )
}