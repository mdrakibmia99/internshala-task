import React from 'react';
import { useNavigate } from 'react-router-dom';

import useUsersInfo from '../../../hooks/useUsersInfo';
import './UserTable.css'

const UserTable = ({setUser}) => {
    const navigate=useNavigate()
    const [users]=useUsersInfo();
    
    const handleInformation=(user)=>{
        setUser(user);
        const email=user?.email;
        navigate(`/user:${email}`)

    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user,index) => <tr
                            key={index+"_uniq"}
                            onClick={()=>handleInformation(user)}>
                            <td data-column="Name">{user?.name?.title} {user?.name?.first} {user?.name?.last}</td>
                            <td data-column="Gender">{user?.gender}</td>
                            <td data-column="City">{user?.location?.city}</td>
                            <td data-column="State">{user?.location?.state}</td>
                            <td data-column="Country">{user?.location?.country}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;