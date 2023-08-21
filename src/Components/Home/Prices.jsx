import { Box, Button, Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import wave from '../assets/wave.svg'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import styled from '@emotion/styled';
function Prices() {
    const theme = useTheme()
    const isMatchedTablette = useMediaQuery(theme.breakpoints.down('md'))
    const isMatchedPhone = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box sx={{ p: { xs: 2, md: 5 }, position: 'relative' }}>
            <Box sx={{ display: 'flex', justifyContent: "center" }}>
                <Typography
                    data-aos='zoom-in'
                    variant={isMatchedPhone ? 'h5' : 'h3'}
                    color="primary.main"
                    sx={{
                        position: 'relative',
                        fontWeight: 'bold',
                        border: '2.3px dotted #102C57',
                        padding: '7px',
                        borderRadius: '15px',
                        mb: 4,
                        '&::before': {
                            bgcolor: '#C70039', position: 'absolute', content: '" "', height: '12px', width: '12px', borderRadius: '50%', bottom: '40%', left: '-25px',
                        },
                        '&::after': {
                            bgcolor: '#C70039', position: 'absolute', content: '" "', height: '12px', width: '12px', borderRadius: '50%', bottom: '40%', right: '-25px',
                        }
                    }}
                >
                    <i>Our Plans </i>
                </Typography>
            </Box>
            <Grid container spacing={isMatchedPhone ? 1 : 4}>
                <Grid xs={12} md={6} lg={4} data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    <Paper elevation={4} sx={{ bgcolor: 'primary.grey', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, borderRadius: '8px' }}>
                        <Typography variant='h5' color='primary' sx={{ p: .7, border: 'dashed 2px #003049', mb: 3, fontWeight: 'bold', fontFamily: 'Yusei Magic', letterSpacing: '3px', borderRadius: '8px' }}>
                            1 MONTH
                        </Typography>
                        <Typography variant='body1' mb={3} sx={{ textAlign: 'center' }}>
                            Lorem ipsum dolor  suscipit aut? Accusamus recusandae sunt consectetur, aliquam inventore hic eveniet voluptatum, quae voluptatibus eius quam illum debitis sed repellat.
                        </Typography>
                        <Typography variant='h5' color='primary' mb={4} fontWeight='bold'>
                            100 DA
                        </Typography>
                        <Button variant='outlined' sx={{ bgcolor: 'primary.light', '&:hover': { bgcolor: 'primary.main', color: 'whitesmoke' }, fontWeight: 'bold', letterSpacing: '2px' }}>
                            See Details
                        </Button>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6} lg={4} data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    <Paper elevation={4} sx={{ bgcolor: 'primary.grey', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, borderRadius: '8px' }}>
                        <Typography variant='h5' color='primary' sx={{ p: .7, border: 'dashed 2px #003049', mb: 3, fontWeight: 'bold', fontFamily: 'Yusei Magic', letterSpacing: '2px', borderRadius: '8px' }}>
                            1 YEAR
                        </Typography>
                        <Typography variant='body1' mb={3} sx={{ textAlign: 'center' }}>
                            Lorem ipsum dolor  suscipit aut? Accusamus recusandae sunt consectetur, aliquam inventore hic eveniet voluptatum, quae voluptatibus eius quam illum debitis sed repellat.
                        </Typography>
                        <Typography variant='h5' color='primary' mb={4} fontWeight='bold'>
                            800 DA
                        </Typography>
                        <Button variant='outlined' sx={{ bgcolor: 'primary.light', '&:hover': { bgcolor: 'primary.main', color: 'whitesmoke' }, fontWeight: 'bold', letterSpacing: '2px' }}>
                            See Details
                        </Button>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6} lg={4}  data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    <Paper elevation={4} sx={{ bgcolor: 'primary.grey', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2, borderRadius: '8px' }}>
                        <Typography variant='h5' color='primary' sx={{ p: .7, border: 'dashed 2px #003049', mb: 3, fontWeight: 'bold', fontFamily: 'Yusei Magic', letterSpacing: '2px', borderRadius: '8px' }}>
                            FOREVER
                        </Typography>
                        <Typography variant='body1' mb={3} sx={{ textAlign: 'center' }}>
                            Lorem ipsum dolor  suscipit aut? Accusamus recusandae sunt consectetur, aliquam inventore hic eveniet voluptatum, quae voluptatibus eius quam illum debitis sed repellat.
                        </Typography>
                        <Typography variant='h5' color='primary' mb={4} fontWeight='bold'>
                            20000 DA
                        </Typography>
                        <Button variant='outlined' sx={{ bgcolor: 'primary.light', '&:hover': { bgcolor: 'primary.main', color: 'whitesmoke' }, fontWeight: 'bold', letterSpacing: '2px' }}>
                            See Details
                        </Button>
                    </Paper>
                </Grid>

            </Grid>
            <img src={wave} alt='wave_Footer' style={{ position: 'absolute', left: 0, bottom: '0', zIndex: -1 }} />

        </Box>
    )
}

export default Prices