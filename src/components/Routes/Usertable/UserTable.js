import React from 'react';
import useUsersInfo from '../../../hooks/useUsersInfo';
import './UserTable.module.css'

const UserTable = () => {
    const [users]=useUsersInfo();
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
                            key={index+"_uniq"}>
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