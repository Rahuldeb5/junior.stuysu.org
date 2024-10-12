import "./About.css";
import { Box, Typography } from "@mui/material";
import Navbar from "../comps/Navbar";
import { useEffect, useState } from "react";
import Papa from "papaparse"; // Use papaparse for parsing CSV

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

    return (
        <Box className="about-page">
            <Box className="navbar">
                <Navbar {...{ page: "Members" }} />
            </Box>

            <Box className="content">
                {data.map((member, index) => (
                    <Box className="box-item" key={index}>
                        <Box className="sub-box">
                            <img
                                src="https://www.shutterstock.com/shutterstock/photos/2397912103/display_1500/stock-photo-happy-dog-holding-rubber-toy-bone-in-mouth-playing-outdoors-2397912103.jpg"
                                style={{ width: "100%", height: "auto" }}
                                alt={`${member.Photo}`}
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
                                className="department-typography"
                                variant="h6"
                                sx={{ textAlign: "center" }}
                            >
                                {member.Department}
                            </Typography>
                            <Typography
                                className="bio-typography"
                                variant="body1"
                                sx={{ textAlign: "center" }}
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
