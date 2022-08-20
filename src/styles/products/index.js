import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";

export const ProductBox = styled(Box)(() => ({
    display:'flex',
    flexDirection:'column',
    borderRadius:5,
    background:'gray',
   
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%",
    background: 'gray',
    padding: '10px',
  }));