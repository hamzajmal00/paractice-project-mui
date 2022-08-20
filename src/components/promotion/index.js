import React from 'react';
import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotion";



const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
    "Please like and subscribe :)",
  ];
export const Promotion = () => {
    const [messageIndex, setmessageIndex] = useState(0)
   
    useEffect(()=>{
        const inetervalId = setInterval(() => {
            setmessageIndex((i)=>(i+1) % messages.length)
        }, 3000);

        return ()=>{
            clearInterval(inetervalId);
        };
    },[]);
    
  return (
    <PromotionsContainer overflow="hidden">
      <Slide
      direction='left'
      in={true}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText>
            {messages[messageIndex]}
          </MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  )
}
