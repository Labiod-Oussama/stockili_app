import React, { useEffect } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
function Services() {
    const Services = [
        'Lorem  sed sint iusto, iure deserunt eveniet numquam repellat est ratione ullam, neque odio quo autem excepturi? Soluta!',
        'Lorem  sed sint iusto, iure deserunt eveniet numquam repellat est ratione ullam, neque odio quo autem excepturi? Soluta!',
        'Lorem  sed sint iusto, iure deserunt eveniet numquam repellat est ratione ullam, neque odio quo autem excepturi? Soluta!',
        'Lorem  sed sint iusto, iure deserunt eveniet numquam repellat est ratione ullam, neque odio quo autem excepturi? Soluta!',
    ]
    const theme = useTheme()
    const isMatchedTablette = useMediaQuery(theme.breakpoints.down('md'))
    const isMatchedPhone = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Box sx={{ mb: { xs: 3, md: 10 } }}>
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
                    <i>Services</i>
                </Typography>
            </Box>
            <Timeline position={isMatchedPhone ? 'right' : 'alternate'} sx={isMatchedPhone && {
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}>
                {
                    Services.map((Service, index) => (
                        <TimelineItem key={index} >
                            <TimelineSeparator>
                                <TimelineDot sx={{ bgcolor: 'primary.light', transform: { xs: 'scale(1)', md: 'scale(1.5)' } }} />
                                {
                                    (index != Services.length - 1) && <TimelineConnector />
                                }
                            </TimelineSeparator>

                            <TimelineContent sx={{ ":first-letter": { color: 'primary.main', fontWeight: 'bolder' }, lineHeight: { xs: '25px', md: '30px' } }}>{Service}</TimelineContent>
                        </TimelineItem>
                    ))
                }
            </Timeline>
        </Box>
    )
}

export default Services