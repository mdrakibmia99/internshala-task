import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './User.css'


const User = ({ user }) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(null)
    const [loading, setLoading] = useState(true)
    //    get user date history 
    const dateCut = user?.dob?.date?.split('T')[0];
    useEffect(() => {
        if (!dateCut) {
            navigate("/")
        }
    }, [navigate, dateCut, user])
    const userMonth = dateCut?.split('-')[1];
    const userDay = dateCut?.split('-')[2];
    let userBirthdayYear;
    console.log("hello")
    // splite current date month 
    const currentDate = parseInt(new Date().getDate());
    const currentMonth = parseInt(new Date().getMonth());
    // compare user time and current time
    if (userMonth > currentMonth || (userMonth === currentMonth && userDay > currentDate)) {
        userBirthdayYear = parseInt(new Date().getFullYear())

    } else {
        userBirthdayYear = parseInt(new Date().getFullYear()) + 1;
    }

    let getBirthdayTime = new Date(`${userBirthdayYear}-${userMonth}-${userDay}T11:59:03.141Z`).getTime();

    // Update the count down every 1 second
    setInterval(function () {

        // Get today's date and time
        let currentDateTime = new Date().getTime();
        // Find the timeAvailable between now and the count down date
        let timeAvailable = getBirthdayTime - currentDateTime;
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(timeAvailable / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeAvailable % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeAvailable % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeAvailable % (1000 * 60)) / 1000);
        // time decoration
        let countDown = <h3>
            {` ${days} days  ${hours} hour
        ${minutes} Min ${seconds} sec`}
        </h3>;
        setCount(countDown)
        setLoading(false)

    }, 1000);



    return (
        <div className='user-section'>

            {
                loading ? <div style={{ textAlign: "center" }}>Loading...</div> : <div className='user-cart'>
                    <div className='items'>
                        <img
                            src={user?.picture?.large}
                            alt="user_thumbnail"
                            className='user-thumb'
                        />
                        <p id='phone-number'>phone: <b>{user?.phone}</b></p>

                        <p id='dob'>Date of Birthday: <b>{user ? user?.dob?.date?.split('T')[0] : ""}</b></p>


                        <div className='upcoming-birthday'>{count}</div>
                        <button className='button' onClick={()=>navigate('/') }>Home</button>
                    </div>
                </div>
            }


        </div>
    );
};

export default User;