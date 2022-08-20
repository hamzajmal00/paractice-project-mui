import {styled} from "@mui/material/styles";
import { Box } from "@mui/system";
import {Typography} from '@mui/material';
import { color } from "../theme";
import { List } from '@mui/material';
import "@fontsource/montez";
import { ListItemButton, ListItemIcon} from '@mui/material';
import IconButton from '@mui/material/IconButton';
//container
export const AppBarContain = styled(Box)(()=>({
    display :'flex',
    marginTop :4,
    justifyContent:'center',
    alignItems:'center',
    padding:'2px 8px'
}));
// Header
export const AppBarHeader = styled(Typography)(()=>({
    padding:'4px',
    flexGrow:1,
    fontSize:'4em',
    fontFamily:'"Montez", "cursive"',
    color: color.secondary,
}));

// list 
export const AppBarList = styled(List)(({type})=>({
    display: type === 'row' ? 'flex' :'block',
    flexGrow:3,
    justifyContent:'center',
    alignItems:'center',
    
}));

export const AppBarIconList = styled(List)(({type})=>({
    display: type === 'row' ? 'flex' :'block',
    flexGrow:0.5,
    justifyContent:'center',
    alignItems:'center',
    background:color.white,
}));

export const AppBarListItemButton = styled(ListItemButton)(()=>({
    width:2,
    display:'flex',
    justifyContent:'center',
    
}));

export const AppBarListItemIcon = styled(ListItemIcon)(()=>({
    justifyContent:'center',
    color: color.primary
}));

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    left: 250,
    zIndex: 1,      
  }));