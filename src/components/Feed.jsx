import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Feed() {
    const navigate = useNavigate();

    const [feedData, setFeedData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("loggedIn") === "false") {
            navigate('/auth');
        }

        fetch(`https://api.github.com/orgs/facebook/repos`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setFeedData(data))
    }, [])

    return (
        <div>
            <div className='m-5 border border-black rounded-md md:px-20 py-10'>
                <h2 className='text-3xl text-blue-900 pb-10 border-b border-black'>Feed</h2>
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
