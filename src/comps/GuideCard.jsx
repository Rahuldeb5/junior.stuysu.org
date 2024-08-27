import { Box, Link, Typography } from "@mui/material";
import React from "react";
import './GuideCard.css';

export default function GuideCard(props) {
    return(
        <Box className="content">
            <Box className="guide-card">
                <Link href={props.link} className="guide-link" target="_blank">
                    <Box className="guide-head">
                        <Typography variant="h1" className="guide-title" style={{ fontFamily: 'Baskervville SC'}}>{props.title} </Typography>
                        <Typography variant="h4" className="guide-date" style={{ fontFamily: 'Baskervville SC' }}>{props.date}</Typography>
                    </Box>
                        <Typography variant="p" className="guide-blurb" style={{ fontFamily: 'New Amsterdam' }}>{props.blurb}</Typography>
                </Link>
            </Box>
        </Box>
    );
}
