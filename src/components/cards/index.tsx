import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { FaRegSmile } from 'react-icons/fa';
import { SlMustache } from "react-icons/sl";

import {
  RiScissors2Line,
  RiBrushLine,
  RiUser3Line,
} from "react-icons/ri";


// Função para criar os cards
const createCard = (title: string, icon: React.ReactNode) => (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
        {icon}
      </Typography>
    
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCards() {
  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}
    >
     
      <Card variant="outlined">
        {createCard(
          "Corte de Cabelo",
          <RiScissors2Line size={50} className="text-center m-auto my-4" />
        )}
      </Card>

     
      <Card variant="outlined">
        {createCard(
          "Barba",
          <SlMustache  size={50} className="text-center m-auto my-4" />
        )}
      </Card>

      
      <Card variant="outlined">
        {createCard(
          "Combo",
          <RiScissors2Line size={50} className="text-center m-auto my-4" />
        )}
      </Card>

     
      <Card variant="outlined">
        {createCard(
          "Pigmentação",
          <RiBrushLine size={50} className="text-center m-auto my-4" />
        )}
      </Card>

     
      <Card variant="outlined">
        {createCard(
          "Luzes",
          <RiUser3Line size={50} className="text-center m-auto my-4" />
        )}
      </Card>

     
      <Card variant="outlined">
        {createCard(
          "Massagem Facial",
          <FaRegSmile size={50} className="text-center m-auto my-4" />
        )}
      </Card>
    </Box>
  );
}
