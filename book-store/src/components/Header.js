import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setvalue] = useState()
  return (
    <div>
        <AppBar sx={{backgroundColor: "#232F3D"}} position='sticky'>
            <Toolbar>
              <NavLink to="/" style={{color: "white"}}>
                <Typography><MenuBookRoundedIcon/></Typography>
              </NavLink>
            <Tabs sx={{ml:"auto"}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setvalue(val)}>
                <Tab LinkComponent={NavLink} to="/add" label='ADD PRODUCT'></Tab>
                <Tab LinkComponent={NavLink} to="/books" label='BOOKS'></Tab>
                <Tab LinkComponent={NavLink} to="/about" label='ABOUT US'></Tab>
            </Tabs>
            </Toolbar>
            
        </AppBar>
    </div>
  )
}

export default Header