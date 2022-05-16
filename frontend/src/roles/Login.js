import './Login.css';


export function Login() {

    return (
        <div className='All'>
            <div className="Bg_image"></div>
            <div className="form">
                <div className="h2"><h2>Log Into Your Account</h2></div>
                <div className="Login">
                    <input id="username" type="text" className="LoginInput" placeholder="userName / Email" required />
                </div>
                <div className="Login">
                    <input id="pass" type="password" className="LoginInput" placeholder="Password" required />
                </div>
                <button type="button" className="ButtonLoginSubmit">
                    <span className="ButtonText">Log In</span>
                </button>
                <div className='checkbox'>
                    <input type="checkbox" id="checkbox" name="checkbox" />
                    <label htmlFor="checkbox">Remember me</label>
                </div>
            </div>
        </div>
    )
}
