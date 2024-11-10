import { Box, Typography } from "@mui/material";
import Papa from "papaparse"; // Use papaparse for parsing CSV
import { useEffect, useState } from "react";
import Navbar from "../comps/Navbar";
import "./Members.css";

export default function About() {
    const [data, setData] = useState([]);
    
    const fetchMemberData = async () => {
        const ID = "1IEVnvQZU5i4JdP50KyOoQrYCaKKWrD2xalFjJMNGKi8";
        const sheet_name = "Form Responses 1";
        const response = await fetch(
            `https://docs.google.com/spreadsheets/d/${ID}/gviz/tq?tqx=out:csv&sheet=${sheet_name}`,
        );
        const text = await response.text();
        const parsedData = Papa.parse(text, { header: true }).data; // Parse CSV to JSON
        setData(parsedData);
    };

    useEffect(() => {
        fetchMemberData();
    }, []);

    const getMemberPhoto = (name) => {
        const pngName = name.trim().toLowerCase().replace(/\s+/g, "_");
        return `/images/people/members/${pngName}.png`; 
    };

    return (
        <Box className="member-page">
            <Box className="navbar">
                <Navbar {...{ page: "Members" }} />
            </Box>
            <Typography
            className="caucusMember"
            variant="h1"
            style={{ fontFamily: "Baskervville SC" }}
          >
            Caucus Members          
            </Typography>
            <Box className="content">
                {data.map((member, index) => (
                    <Box className="member-box-item" key={index}>
                        <Box className="member-sub-box">
                            <img
                                src={getMemberPhoto(member.Name)}
                                style={{display: "block", marginLeft: "auto", marginRight:"auto", paddingBottom: "25px"}}
                            />    
                            <Typography
                                className="name-typography"
                                variant="h4"
                                sx={{ textAlign: "center" }}
                                style={{ fontFamily: "Baskervville SC" }}
                            >
                                {member.Name} 
                            </Typography>
                            <Typography
                                className="bio-typography"
                                variant="body1"
                                sx={{ textAlign: "center" }}
                                style={{ fontFamily: "Lora" }}
                            >
                                {member.Bio}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
