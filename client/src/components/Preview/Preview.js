import style from "../Preview/style.module.css";

const Preview= () => {
    return (
     <div className= {style.wrapper} >
        <h1>Нschool</h1>
        <div className= {style.flexBtn}>
            <div className = {style.loginBtn}>Login → </div>
            <div className = {style.regBtn}>Sign Up</div>
        </div>
    </div>
    )
}

export default Preview;