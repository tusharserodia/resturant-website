import React from 'react'
import Layout from '../components/Layout'
import { MenuList } from '../data/data'
import {Box, Card, CardActionArea, CardMedia,Typography, CardContent} from '@mui/material';

const Menu = () => {
  return (
    <Layout>
        <Box sx = {{display: "flex", flexWrap: 'wrap', justifyContent: 'center'}}>
          {
            MenuList.map(menu => (
              <Card sx = {{maxWidth: "390px", display: "flex", m: 2}}>
                <CardActionArea>
                  <CardMedia sx={{minHeight: '400px'}} component={'img'} src={menu.image} alt = {menu.name}/>
                  <CardContent>
                    <Typography variant="h5" gutterbutton component = {"div"}>
                      {menu.name}
                    </Typography>
                    <Typography variant="body2">{menu.description}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

            ))
          }
        </Box>
    </Layout>
  )
}

export default Menu