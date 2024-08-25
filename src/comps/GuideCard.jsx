import React from "react";
import './GuideCard.css';
import { Box, Link, Typography } from "@mui/material";

export default function GuideCard(props) {
    return(
        <Box className="content">
            <Box className="guide-card">
                <Link href={props.link} className="guide-link">
                    <Box className="guide-head">
                        <Typography variant="h1" className="title">{props.title}</Typography>
                        <Typography variant="h4" className="date">{props.date}</Typography>
                        <Typography variant="p" className="blurb">{props.blurb}</Typography>
                    </Box>
                    <Box className="content"></Box>
                </Link>
            </Box>
        </Box>
    );
}
