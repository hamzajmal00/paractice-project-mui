import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React, { Fragment } from 'react';
import { AppBarDeskTop } from './AppBarDeskTop';
import { AppBarMobile } from './AppBarMobile';




export const AppBaar = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Fragment>
        {
            matches ? <AppBarMobile /> : <AppBarDeskTop /> 
        }
        
    </Fragment>
  )
}
