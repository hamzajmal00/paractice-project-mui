import { createTheme } from "@mui/material";

export const DrawerWidth = 250;

export const color = {
    primary:"#5f2c3e",
    secondary:"#d1adcc",
    success:"#4caf50",
    info:"#00a2ff",
    danger:"#ff5722",
    warning:"#ffc107",
    dark:"#0e1b20",
    light:"#aaa",
    muted:"#abafb3",
    border:"#dddfe1",
    inverse:"#2f3d4a",
    shaft:"#333",
    dim_gray:"#696969",
    dove_gray:"#d5d5d5",
    body_bg:"#f3f6f9",
    light_gray:"rgb(230,230,230)",
    white:"#fff",
    black:"#000",
    custom:'#f57c00',
    myColor:'#00ab74',

};

const theme = createTheme({
    palette:{
        
        primary:{
            main:color.primary
        },
        secondary:{
            main:color.secondary
        },
        myColor: {
            main: '#00ab74', // #f8f8f8
          },
        custom: {
            
            main: color.custom,
            
        }
    },
    typography:{
        abc:{
            color:color.custom,
            fontFamily:'"Montez", "cursive"',
            fontWeight:'4em',
            fontSize: '3rem',
        },
        efg:{
            color:color.myColor,
            fontFamily:'"Montez", "cursive"',
            fontWeight:'4em',
            fontSize: '3rem',
        }
    }
});

export default theme