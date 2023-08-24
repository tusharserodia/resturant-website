import React from 'react'
import Layout from '../components/Layout'
import {Box, Typography} from '@mui/material'
import {Paper, Table, TableCell, TableContainer, TableHead, TableRow, TableBody} from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:10, ml: 10,"& h4": {fontWeight: "bold", mb: "2"}}}>
        <Typography variant= "h4">Contact Our Resturant</Typography>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          </p>
        
      </Box>
      <Box 
        sx = {{ 
        m: 5, 
         width: "600px" ,
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
       }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
          <TableHead>
            <TableRow>
              <TableCell 
              sx={{bgcolor: "black", color: "white"}}
              align='center'
              >Contact Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                 <SupportAgentIcon sx={{color: 'red' ,pt: '1'}}/> 1800-00-0000 (toll free)
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
                 <EmailIcon sx={{color: 'skyBlue' ,pt: '1'}}/> help@myrest.com
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell>
                 <CallIcon sx={{color: 'green' ,pt: '1'}}/> 1234567890
              </TableCell>
            </TableRow>
          </TableBody>
          </Table>
          
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact