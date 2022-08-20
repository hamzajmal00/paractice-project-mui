import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { ProductBox, ProductImage } from '../../styles/products'

export const Product = () => {
    return (
        <Grid container spacing={3} justifyContent={'center'} sx={{ marginBottom: 20 }}>
            <Grid item lg={3} md={3} sm={4} xm={12} >
                <ProductBox>
                    <img src='images/banner/banner.png' />

                </ProductBox>
            </Grid>
            <Grid item lg={3} md={3} sm={4} xm={12} >
                <ProductBox>
                    <img src='images/banner/banner.png' />

                </ProductBox>
            </Grid>
            <Grid item lg={3} md={3} sm={4} xm={12} >
                <ProductBox>
                    <img src='images/banner/banner.png' />

                </ProductBox>
            </Grid>
            <Grid item lg={3} md={3} sm={4} xm={12} >
                <ProductBox position={'raletive'}>

                    <img src='images/banner/banner.png' />
                    <Typography variant='efg'>helo world</Typography>

                </ProductBox>
            </Grid>



        </Grid>
    )
}
