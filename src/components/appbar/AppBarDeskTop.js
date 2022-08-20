import React, { Fragment } from 'react'
import { AppBarContain, AppBarHeader, AppBarIconList, AppBarList, AppBarListItemButton, AppBarListItemIcon } from '../../styles/appbar'
import { ListItemButton, ListItemText,ListItemIcon, Button } from '@mui/material';
import { Search } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Divider from '@mui/material/Divider';
import theme, { color } from '../../styles/theme';

export const AppBarDeskTop = () => {
  return (
    <Fragment>
        <AppBarContain>
           <AppBarHeader color="primary" variant='contained'>My Bags</AppBarHeader>
            <AppBarList type="row">
               
                    <ListItemText primary="home" />
                    <ListItemText primary="Category" />
                    <ListItemText primary="Products" />
                    <ListItemText primary="Contact Us" />
                    <ListItemButton color="custom">
                        <ListItemIcon>
                            <Search />
                        </ListItemIcon>
                    </ListItemButton>
              
                
            </AppBarList>
            <AppBarIconList type="row">
             <AppBarListItemButton>
                <AppBarListItemIcon>
                    <ShoppingCartIcon />
                </AppBarListItemIcon>
             </AppBarListItemButton>
             <Divider orientation="vertical" flexItem />
             <AppBarListItemButton>
                <AppBarListItemIcon>
                    <FavoriteIcon />
                </AppBarListItemIcon>
             </AppBarListItemButton>
             <Divider orientation="vertical" flexItem />
             <AppBarListItemButton>
                <AppBarListItemIcon>
                    <PersonIcon />
                </AppBarListItemIcon>
             </AppBarListItemButton>
            </AppBarIconList>
        </AppBarContain>
    </Fragment>
  )
}
