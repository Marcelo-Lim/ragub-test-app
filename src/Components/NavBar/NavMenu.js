import React, { useState,useEffect } from "react";
import { makeStyles, AppBar } from "@material-ui/core";
import {
  Button,
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { Link,useLocation } from "react-router-dom";
import Item from "./DataItems";
import "./NavBar.css";
import { COLORS } from '../Styles/colors';

const doctorMenu =[
  {
      title: "Home",
      component: "/Home"
  },
  {
      title: "Staff",
      component: "/Staff"
  },
  {
      title: "Doctor",
      component: "/Doctor"
  },
  {
      title: "Book Now",
      component: "/"
  },/*
  {
    title: "Monitoring",
    component: "/Monitoring"
  },*/
]
const menu =[
    {
        title: "Home",
        component: "/Home"
    },
    {
        title: "AboutUs",
        component: "/Staff"
    },
    {
        title: "ContactUs",
        component: "/Doctor"
    },
    {
        title: "Book Now",
        component: "/"
    },
    
    {
        title: "Doctor",
        component: "/DoctorHome"
    },
    
    /*
    {
      title: "Monitoring",
      component: "/Monitoring"
    },*/
]


const NavMenu = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPage, setSelectedPage] = useState("Home");
    const classes = useStyles();
    



    return (
      <AppBar
        elevation={0}
        position='relative'
        style={{ boxShadow: "none", background: COLORS.MAROON, }}
      >
        <Navbar
          className='navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow w-100'
          dark
        >
          <Container>

            <NavbarBrand tag={Link} to='/'>
              {/* <div className="navbarbrand">
                <img src={IconClinic} alt='logo' height="50px" width="60px" />
              </div> */}
            </NavbarBrand>
            {user?.result? (<>
            <NavbarToggler
              onClick={() => setIsOpen(!isOpen)}
              className='mr-2 white '
            />
            <Collapse
              className='d-sm-inline-flex flex-sm-row-reverse'
              isOpen={isOpen}
              navbar
            >
              <ul className='navbar-nav flex-grow mx-auto'>
                {menu.map(({ title, component }, idx) => (
                  <Item
                    key={idx}
                    title={title}
                    component={component}
                    onClickListener={() => {
                      setSelectedPage(title);
                    }}
                  
                  />

                ))}
              </ul>
            </Collapse>

            {/* { <Button className={classes.buttonlogout} variant="contained"  onClick={logout}>Logout</Button>} */}

            </>):(<>
                  <NavbarBrand tag={Link} to='/Authentication'>
                    <div className="navbarbrand">
                      <Button className={classes.buttonlogin} variant="contained">Sign In</Button>
                    </div>
                  </NavbarBrand></>
            )}
          </Container>
        </Navbar>
      </AppBar>
    );
  };
  
  const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      fontWeight: "bold",
      fontSize: 25,
      fontFamily: "Pathway Gothic One",
    },

    buttonlogout: {
      backgroundColor: "lightgray",
    },
    buttonlogin: {
    
      backgroundColor: "lightgray",
    },
  }));
  export default NavMenu;