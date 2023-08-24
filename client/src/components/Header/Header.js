import { Link } from 'react-router-dom';
import style from "../Header/style.module.css";

const Header = () => {
    
    return (
     <div className= {style.wrapper} >
        <h1> <Link to = {"/"}>Hschool</Link></h1>
        <div className= {style.flexBtn}>
            <div className = {style.loginBtn}>Login → </div>
            <div className = {style.regBtn}>
                <Link to = {"/reg"}> Sign Up </Link>
            </div>
        </div>
    </div>
    )
}

export default Header;