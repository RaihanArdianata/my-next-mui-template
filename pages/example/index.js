import { Divider, Grid, Icon, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import LandscapeCalender from 'components/calender/LandscapeCalender';
import GoogleMapsReact from 'components/maps/GoogleMapsReact';
import { Panolens } from 'components/panorama/Panolens';
import Layout from 'layouts/dashboard';
import React, { useState } from 'react';

function Example() {
  const [isBookMark, setIsBookMark] = useState(false);
  return (
    <Layout>
      <Grid mb={10} container columns={{ xs: 1, sm: 1, md: 2 }} paddingX={0} justifyContent="center">
        <Grid item xs={1} sm={1} md={1} paddingX={5} gap={10}>
          <Grid container padding={0} >
            <Grid item xs={10} sm={10} md={10} >
              <Typography variant='h6' fontWeight="bold" letterSpacing={1.5}>Lokantara Rawamangun Jakarta Timur</Typography>
            </Grid>
            <Grid item>
              <Icon sx={{ color: '#dfa801' }}>grade</Icon>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1' letterSpacing={1.5}>4.5(4k)</Typography>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 7 }} />
          <Box sx={{ position: 'relative', borderRadius: 3, width: '100%', height: 500, overflow: 'hidden' }}>
            <Panolens />
          </Box>
        </Grid>
        <Grid item xs={1} sm={1} md={1} >
          <Grid container >
            <Grid item xs={11} sm={11} md={11} >
              <Typography variant='h6' fontWeight="bold" letterSpacing={1.5}>Location</Typography>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => setIsBookMark(!isBookMark)}
              >
                <Icon sx={{ color: isBookMark ? '#009388' : '' }}>bookmark_add</Icon>
              </IconButton>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 5 }} />
          <Box className='shadow-lg' sx={{ padding: 2 }}>
            <Box sx={{ position: 'relative', width: '100%', height: 300, overflow: 'hidden' }}>
              <GoogleMapsReact />
            </Box>
            <div className='my-10' />
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} flexDirection="column" >
              <Grid item xs={12} sm={12} md={12}>
                <Grid container columnSpacing={2}>
                  <Grid item>
                    <Icon sx={{ color: '#009388' }}>location_on</Icon>
                  </Grid>
                  <Grid item xs={8} sm={8} md={8}>
                    <Typography>Jl. Pemuda No.105, RT.1/RW.1, Jati, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220</Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Grid container columnSpacing={2}>
                  <Grid item>
                    <Icon sx={{ color: '#009388' }}>phone_in_talk</Icon>
                  </Grid>
                  <Grid item xs={8} sm={8} md={8}>
                    <Typography>085157722901</Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Grid container columnSpacing={2}>
                  <Grid item>
                    <Icon sx={{ color: '#009388' }}>mail</Icon>
                  </Grid>
                  <Grid item xs={8} sm={8} md={8}>
                    <Typography>integraha@mail.com</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <Divider variant="middle" />

      <Grid my={10} container columns={{ xs: 1, sm: 1, md: 2 }} paddingX={0} justifyContent="center">
        <Grid item xs={1} sm={1} md={1} paddingX={5} gap={10}>
          <Grid container padding={0} >
            <Grid item xs={10} sm={10} md={10} >
              <Typography variant='h6' fontWeight="bold" letterSpacing={1.5}>Reservation</Typography>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 4 }} />
          <Box className='shadow-lg' sx={{ position: 'relative', borderRadius: 3, width: '100%', overflow: 'hidden', padding: 2 }}>
            <LandscapeCalender />
          </Box>
        </Grid>
        <Grid item xs={1} sm={1} md={1} >
          <Grid container >
            <Grid item xs={12} sm={12} md={12} >
              <Typography variant='h6' fontWeight="bold" letterSpacing={1.5}></Typography>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 9 }} />
          <Box className='shadow-lg' sx={{ padding: 2 }}>

          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Example;