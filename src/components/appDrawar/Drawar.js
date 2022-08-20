import { Drawer, List } from '@mui/material'
import React, { Fragment, useContext } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { color } from "../../styles/theme";
import { DrawerCloseButton } from '../../styles/appbar';
import CloseIcon from '@mui/icons-material/Close';
import { UIContext } from '../../App';




export const Drawar = () => {
    const {drawrOpen, setdrawrOpen} = useContext(UIContext);
  return (
    <Fragment>
    <Drawer PaperProps={{ 
        sx:{
            width:250,
            background: color.primary,
            overflow:'unset',
            color: color.secondary,
            borderRadius: '0px 100px 0px 0px',
            borderRight: `1px solid ${color.primary}`
        }
     }}
     open={drawrOpen}
     >
     {drawrOpen && <DrawerCloseButton onClick={() =>setdrawrOpen(false)}>
     <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: color.secondary,
            }}
          />
     </DrawerCloseButton>}
        <List>
            <ListItemButton divider>
                <ListItemText>Home</ListItemText>
            </ListItemButton>
            <ListItemButton divider>
                <ListItemText>Categories</ListItemText>
            </ListItemButton>
            <ListItemButton divider>
                <ListItemText>Products</ListItemText>
            </ListItemButton>
            <ListItemButton divider>
                <ListItemText>About Us</ListItemText>
            </ListItemButton>
            <ListItemButton divider>
                <ListItemText>Contact Us</ListItemText>
            </ListItemButton>
        </List>
    </Drawer>
    </Fragment>
  )
}
