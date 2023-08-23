import style from "../Header/style.module.css";

const Header = () => {
    return (
     <div className= {style.wrapper} >
        <h1>Hschool</h1>
        <div className= {style.flexBtn}>
            <div className = {style.loginBtn}>Login → </div>
            <div className = {style.regBtn}>Sign Up</div>
        </div>
    </div>
    )
}

export default Header;