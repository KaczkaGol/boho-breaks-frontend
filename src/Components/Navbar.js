import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from "../Assets/final_logo.png";
import {BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import {Box,Drawer,List,ListItem,Button,ListItemIcon,ListItemText, ListItemButton} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Domů",
            icon:<HomeIcon/>,
            to: "/"
        },
        {
            text:"Nabídka",
            icon:<InfoIcon/>,
        
        children: [
            { text: "Zážitkové trasy", icon: <InfoIcon /> , to:"/nabidka/zazitkove-trasy" },
            { text: "Degustační trasy", icon: <InfoIcon />, to:"/nabidka/degustacni-trasy" },
            { text: "Jednodenní výlet do Rud", icon: <InfoIcon /> , to:"/nabidka/tematicke-balicky"},
          ],
        },
        {
            text:"O nás",
            icon:<CommentRoundedIcon/>,
            to:"/onas"
        },
        {
            text:"Kontakt",
            icon:<PhoneRoundedIcon/>,
            to:"/kontakt"
        },
        {
          text:"Rezervovat",
          icon:<PhoneRoundedIcon/>,
          to:"/rezervovat"
      },
    ]
  return (
    <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="Boho breaks" />
        </div>
        <div className="navbar-links-container">
        <Link to="/">Domů</Link>
<div className="dropdown">
<a href="">Nabídka</a>
<div className="dropdown-content">
<Link to="/nabidka/zazitkove-trasy">Zážitkové trasy</Link>
<Link to="/nabidka/degustacni-trasy">Degustační trasy</Link>
<Link to="/nabidka/tematicke-balicky">Výlet do Rud</Link>
    </div>
    </div>
<Link to="/onas">O nás</Link>
<Link to="/kontakt">Kontakt</Link>
<button className="primary-button" onClick={() => window.location.href = '/rezervovat'}>Rezervovat</button>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
        anchor="right">
            <Box 
            sx={{width:250}}
            role = "presentation"
            onClick={()=> setOpenMenu(false)}
            onKeyDown={()=> setOpenMenu(false)}
            >
               <List>
  {menuOptions.map((item) => (
    <React.Fragment key={item.text}>
      <ListItem disablePadding>
        <ListItemButton component={Link} to={item.to || "#"}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      </ListItem>

      {item.children &&
        item.children.map((subItem) => (
          <ListItem key={subItem.text} disablePadding sx={{ pl: 4 }}>
            <ListItemButton component={Link} to={subItem.to}>
              <ListItemIcon>{subItem.icon}</ListItemIcon>
              <ListItemText primary={subItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
    </React.Fragment>
  ))}
</List>


            </Box>
        </Drawer>
    </nav>
  )
}

export default Navbar