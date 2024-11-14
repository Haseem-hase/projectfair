import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { FcVideoProjector } from "react-icons/fc";


function Header() {
    const [openNavSecond, setOpenNavSecond] = useState(false);
  return (
    <div>
         <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img src="https://w7.pngwing.com/pngs/1001/598/png-transparent-computer-icons-briefcase-lia-find-job-rectangle-leather-logo.png" alt="" height={'40px'} className='bg-light' />PROJECT FAIR</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='/'>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink href='/projects'>Projects</MDBNavbarLink>
            <MDBNavbarLink href='/dashboard'>dashBoard</MDBNavbarLink>
          
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    </div>
  )
}

export default Header