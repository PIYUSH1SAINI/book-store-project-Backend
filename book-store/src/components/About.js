import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography sx={{fontFamily:"fantasy"}} variant="h2">This is s CRUD Application</Typography>
        <Typography variant="h3">BY MERN STACK</Typography>
      </Box>
    </div>
  )
}

export default About