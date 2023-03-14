import React from 'react'

function Navbar() {

    const onLogout = () => {
        localStorage.setItem("loggedIn", false);
        window.location.reload()
    }

    return (
        <div className='flex justify-between px-8 md:px-20 py-10 border border-black m-5 rounded-sm'>
            <ul className="flex">
                <li key={1} className="mr-6">
                    <a className="text-blue-500 hover:text-red-800" href='/'>Home</a>
                </li>
                <li key={2} className="mr-6">
                    <a className="text-blue-500 hover:text-red-800" href='/auth'>AUTH</a>
                </li>
                <li key={3} className="mr-6">
                    <a className="text-blue-500 hover:text-red-800" href='/feed'>Feed</a>
                </li>
            </ul>
            <button className='text-red-900' onClick={onLogout}>Log Out</button>
        </div>
    )
}

export default Navbar
