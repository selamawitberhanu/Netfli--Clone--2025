import React from 'react'
import "./header.css"
import Netflix from "../../assets/images/NetflixLogo.jpg"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className='header_outer_container'>

      <div className='header_container'>

        <div className='header_left'>
          <ul>
            <li><img src= {Netflix} alt="NetflixLOgo" width= "100"/></li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className='header_right'>
        <ul>
          <li><input type="text"></input></li>
           <li><SearchIcon/></li> 
            <li><NotificationsNoneIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Header