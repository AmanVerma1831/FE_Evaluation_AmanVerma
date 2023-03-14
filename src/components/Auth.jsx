import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Auth() {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState(false);
    const [logged, setLogged] = useState(false)
    const navigate = useNavigate();


    const onChangeUser = (e) => {
        setUser(e.target.value);
    }

    const onChangePass = (e) => {
        setPass(e.target.value);
    }

    const onClick = (e) => {
        e.preventDefault();
        if (user === "aman" && pass === "aaa") {
            localStorage.setItem("loggedIn", true);
            setLogged(true)
            window.location.reload()
            navigate('/feed');


        }
        else {
            setMessage(true);
        }

    }

    useEffect(() => {
        if (localStorage.getItem("loggedIn") === "true" || logged) {
            navigate('/feed');
        }
    }, [])


    return (
        <div className='flex flex-col text-center justify-center'>

            <form>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md p-2.5" placeholder="Email" value={user} onChange={onChangeUser} required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md p-2.5" placeholder="Password" value={pass} onChange={onChangePass} required />
                </div>
                <button type="submit" onClick={onClick} className="text-white bg-blue-700 px-5 py-2 rounded-md">Submit</button>
            </form>
            <div>
                <h2 className='text-red-700'>{message && "Your Email/Password is wrong"}</h2>
            </div>

        </div>
    )
}

export default Auth;
