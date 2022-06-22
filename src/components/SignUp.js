import { useState } from 'react'
import '../App.css';
import Home from './Home'

const SignUp = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
            {!toggle ?
                (
                    <div className="login-box">

                        <div>
                            <a href='/'
                                style={{ color: '#f47066' }}
                            >Go back</a>
                        </div>

                        <h2 style={{marginTop:-0.1}}>Signup</h2>
                        <form>
                            <div className="user-box">
                                <input type="label" name="" required="Username" />
                                <label>Username</label>
                            </div>

                            <div className="user-box">
                                <input type="label" name="" required="Email" />
                                <label>Email</label>
                            </div>

                            <div className="user-box">
                                <input type="password" name="" required="Password" autoComplete='false'/>
                                <label>Password</label>
                            </div>

                            <div className="user-box">
                                <input type="password" name="" required="Re-Enter Password" autoComplete='false'/>
                                <label>Re-Enter Password</label>
                            </div>

                            <div>
                                <a href={"#Home"}
                                    onClick={() => setToggle(!toggle)}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <label>Submit</label>
                                </a>
                            </div>
                        </form>
                    </div>
                )
                :
                (
                    <Home />
                )
            }
        </div>
    )
}

export default SignUp