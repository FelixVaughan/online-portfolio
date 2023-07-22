import * as React from "react";
import { Box, Paper } from "@mui/material";
import profile from "../data/profile";

const DataBlock = (props) => {
  const boxStyle = {
    width: 400,
    height: 400,
    marginRight: 100,
    top: 100,
    marginTop: -60, // Adjust the marginTop value as needed
    backgroundColor: "#FFD700",
    color: "var(--tertiary-color)",
    display: "inline-block", // Optional: Use this property to adjust the positioning in relation to other elements
  };

  return <Paper elevation={3} sx={boxStyle}></Paper>;
};
export default function Home() {
  return <DataBlock></DataBlock>;
}
