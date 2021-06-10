import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const {email, password} = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        console.log('Success');
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Log in</h1>
            <p className="lead"><i className="fas fa-user"></i>Log in to your account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required/>
                </div>
                <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    value={password} 
                    onChange={e => onChange(e)} 
                    required
                />
                </div>
                <input type="submit" className="btn btn-primary" value="Log in" />
            </form>
            <p className='my-1'>
                Don't have an account? <Link to='/register'>Sign in</Link>
            </p> 
        </Fragment>
    )
}

export default Login;