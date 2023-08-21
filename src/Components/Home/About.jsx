import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import about from '../../Assets/about.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

function About() {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, [])
    const theme = useTheme()
    const isMatchedTablette = useMediaQuery(theme.breakpoints.down('md'))
    const isMatchedPhone = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box pt={2}>
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
                    <i>About Us</i>
                </Typography>
            </Box>
            <Box display='flex' p={isMatchedPhone ? '0 15px' : '0 50px'} flexDirection={isMatchedPhone ? 'column-reverse' : 'row'} mb={8} mt={3}>
                <Box data-aos="fade-right" flex={1} textAlign='center'>
                    <img src={about} alt="cv" width='80%' />
                </Box>
                <Box data-aos="fade-left" flex={1} p={isMatchedPhone ? '0 5px' : '0 50px'} display='flex' flexDirection='column' justifyContent='center' mb={isMatchedPhone && 5} >
                    <Typography variant={isMatchedPhone ? 'h5' : 'h4'} sx={{ fontWeight: 'bolder', mb: isMatchedPhone ? 2 : 5 }} color='secondary.main' gutterBottom>
                        How about startups ? 
                    </Typography>
                    <Typography variant='body1' color='secondary.main'>
                        Lorem ipsum dolor sit amet connsectetur adipisicing elit. Distinctio quaerat doloremque quae dignissimos ab eius laboriosam, odit impedit tenetur expedita labore? Eaque ab accusantium modi.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default About