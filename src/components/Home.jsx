import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate('/auth');
    }

    const onClickFeed = () => {
        navigate('/feed');
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-evenly m-5 border border-black rounded-md px-20 py-10'>
                <button
                    className='flex text-center rounded-md bg-sky-400 p-8 md:p-32 hover:bg-sky-600 text-xl md:text-5xl m-2'
                    onClick={onClickLogin}
                >
                    LOGIN
                </button>
                <button
                    className='flex rounded-md bg-sky-400 p-8 md:p-32 hover:bg-sky-600 text-xl md:text-5xl m-2'
                    onClick={onClickFeed}
                >
                    FEED
                </button>
            </div>
        </div>
    )
}

export default Home
