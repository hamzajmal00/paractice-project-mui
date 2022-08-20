import React, { Fragment } from 'react'
import { BannerContain, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../styles/banner';
import { Typography } from "@mui/material";

export const Banar = () => {
   
  return (
    <Fragment>
        <BannerContain>
            <BannerImage src="/images/banner/banner.png" />
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">
                    New Bags
                </BannerTitle>
                <BannerDescription variant="subtitle">
                    Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
                    tempor incididunt ut labore et dolore magna
                </BannerDescription>
            </BannerContent>
        </BannerContain>
    </Fragment>
  )
}
