import React, { Fragment, useContext } from 'react'
import { AppBarContain, AppBarHeader, AppBarIconList, AppBarListItemButton, AppBarListItemIcon } from '../../styles/appbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import Divider from '@mui/material/Divider';
import { UIContext } from '../../App';

export const AppBarMobile = () => {
    const {setdrawrOpen} = useContext(UIContext);
  return (
    <Fragment>
        <AppBarContain>
            <IconButton onClick={()=>setdrawrOpen(true)}>
                <MenuIcon />
            </IconButton>
      
            <AppBarHeader textAlign={'center'} variant='h6'>
                    My Bags
            </AppBarHeader>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <AppBarIconList type="row" sx={{position:'fixed',bottom:0, justifyContent:'space-between',width:'100%' }}>
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
