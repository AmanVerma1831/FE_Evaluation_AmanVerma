import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Feed() {
    const navigate = useNavigate();
    //const [value, setValue] = useState()
    // const [time, setTime] = useState(0)
    const [feedData, setFeedData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("loggedIn") === "false") {
            navigate('/auth');
        }

    }, [])
    function debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout)
        }
    }
    function fetchCall(value) {
        fetch(`https://api.github.com/orgs/${value}/repos`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                if (data?.message !== 'Not Found') {
                    console.log(data)
                    setFeedData(data)
                }
            })
    }

    const v = debounce((s) => fetchCall(s));
    const changeHandler = (event) => {
        v(event.target.value)
    }

    return (
        <div>
            <div className='m-5 border border-black rounded-md md:px-20 py-10'>
                <h2 className='text-3xl text-blue-900 pb-10 border-b border-black'>Feed</h2>
                {localStorage.getItem("loggedIn") === "true" ?
                    <div className='flex justify-center'>
                        <form>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input type="search" id="default-search" className="w-[25rem] block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Organization" onChange={changeHandler} required />
                            </div>
                        </form>
                    </div>
                    : null}
                {feedData.map((data) => (
                    <div className='md:m-5 bg-teal-200 rounded-3xl text-center'>
                        <div key={data.id} className="py-10">
                            <p>Id : {data.id}</p>
                            <p>Name : {data.name}</p>
                            <p>language : {data.language}</p>
                            <p>Node id : {data.node_id}</p>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Feed
