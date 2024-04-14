import React, { useEffect, useState } from 'react'
import './UserDetials.css'
import { useParams, useLocation, Outlet, NavLink } from 'react-router-dom'
import axios from 'axios';
function UserDetails() {

    const userData = useLocation();
    const state = userData.state || '';

    const { userid } = useParams();
    const [user, setUser] = useState(state);

    //  here instead of querying data from the sever
    //  i use usenavigate and pass data throught state and get by using useLocation

    useEffect(() => {
        if (!user) {
            axios('/data.json')
                .then((res) => {
                    const item = res.data.find((userDatas) => userDatas.id === parseInt(userid))
                    setUser(item)

                })
        }
    }, [userid, user])
    console.log(user)

    return (
        <div className='main'>
            <div className='hero'>
                <h4> {user.class}</h4>
                <h2>{user.name}</h2>
                <h4>{user.address}</h4>
                <h4>{user.age}</h4>
                <div className='sub-menu'>
                    <NavLink to={''}>
                        <div className='marks'>marks</div>
                    </NavLink>
                    <NavLink to={'sports'}>
                        <div className='sports'>sports</div>
                    </NavLink>
                    <NavLink to={'remarks'}>
                        <div className='remarks'>remarks</div>
                    </NavLink>
                </div>
                <Outlet context={user} />
            </div>

        </div>
    )
}

export default UserDetails