import { useRef, useState, useEffect,useContext} from "react";
import {Link,useNavigate,useLocation} from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import axios from '../api/axios';


const LOGIN_URL = '/auth';

const Login = () => {
    const {auth,setAuth} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = "/";
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
   

    useEffect(() => {
        userRef.current.focus();
    }, [])
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser("");
            setPwd("");
            navigate(from,{replace:true});
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    return (
        <div className='Appr'>
           
                <section className="sectionr">
                    <p ref={errRef} className={errMsg ? "errmsgr" : "offscreenr"} aria-live="assertive">{errMsg}</p>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit} className="formr">
                        <label htmlFor="username" className="labelr">
                            Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            className="input1r"
                            required />


                        <label htmlFor="password" className="labelr">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            className="input2r" />
                        <button className="buttonr">Sign in</button>
                    </form>
                    <p>
                        did not register?<br />
                        <span className="liner">
                            {/*put router link here*/}
                            <Link to='/Register'>sign up</Link>
                        </span>
                    </p>
                </section>
            
        </div>
    )
}

export default Login

