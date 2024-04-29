import {Link, useMatch, useResolvedPath} from "react-router-dom";
import './navbar.css'
//import logo from '../images/nike-logo.png'


const Navbar = () => {

    return (
        <header className="secondaryHeader">

        <div className="logo-container">
        <CustomLink to='/'> <i className="ri-car-fill"></i> EngineX</CustomLink>

        </div>   

        <div className="headerNav">
            <CustomLink to='/'>Home</CustomLink>
            <Link to='#'>Explore</Link>
            <CustomLink to='/compare'>Compare</CustomLink>
            <Link to='#'>Search</Link>
            <Link to='#'>About</Link>
            

        </div>


        <div className = "userIcons">
           
            <button className='loginButton'><p className='loginButtonText'>Log in</p></button>

           

        </div>


        </header>

    );

}

function CustomLink({to, children,  ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <Link className = {isActive ? "active" : ""} to={to} {...props}>{children}</Link>
    )
  }


export default Navbar;