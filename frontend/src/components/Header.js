import React from 'react';
import '../style/header.css';
import logo from '../store/header_icon.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  // const [inputPage,setInputPage]=useState(false);

  // const inputPageHandling=(e)=>{
  //   e.preventDefault();
  //   setInputPage(true);
  // }
  return (
    <div className='headerComponent'>
        <Link to='/' className='logo'><img src={logo} alt="logo" /><span style={{fontSize:"28px",color:"#006238"}}>InstaClone</span></Link>
        <Link to='/post' className='nav'><i style={{fontSize:"28px"}} className="fa-solid fa-camera"></i></Link>
    </div>
  )
}

export default Header