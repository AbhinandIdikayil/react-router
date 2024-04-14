import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import './Users.css'
function Users() {
    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    const cls = searchParams.get('class');

    useEffect(() => {
        axios('data.json')
            .then((response) => {
                setData(response.data)
            })
    }, [])

    
    function handleSelectingClass(e) {
        console.log(e.target.value)
        if(e.target.value === 'all'){
           return navigate('/users')
        }
        setSearchParams({class:e.target.value})
    }


    return (
        <div className='main'>
            <div className='users-list'>
                <div>
                    select class : 
                    <select onChange={handleSelectingClass} name="" id="">
                        <option value="all">all</option>
                        <option value="1"> 1</option>
                        <option value="2">2</option>
                        <option value="6"> 6</option>
                        <option value="7">7</option>
                    </select>
                </div>

                {data
                    .filter((data) => {
                        if (!cls) {
                            return true
                        }
                        return cls == data.class
                    })
                    .map((data, ind) => {
                        return (
                            <div className='user' onClick={() => {
                                navigate(`details/${data.id}`, {
                                    state : data
                                })
                            }}>
                                <div>
                                    <h2>{data.name}</h2>
                                </div>
                                <h5>class : {data.class}</h5>
                                <span>
                                    {data.address}
                                </span>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Users