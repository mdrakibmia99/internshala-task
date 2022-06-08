import React, { useState } from 'react';


const User = ({ user }) => {
    const [count, setCount] = useState(null)
    //    get user date history 
    const dateCut = user?.dob?.date.split('T')[0];
    const userMonth = dateCut.split('-')[1];
    const userDay = dateCut.split('-')[2];
    let userBirthdayYear;

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
        let countDown = <p>
            {` ${days} days  ${hours} hour
        ${minutes} Min ${seconds} sec`}
        </p>;
        setCount(countDown)


    }, 1000);


    return (
        <div>
            <h3>This is user page:{user?.email}</h3>

            <h2>Time:{count}</h2>
            <p id='dob'>date of birth: <b>{user?.dob?.date.split('T')[0]}</b></p>


        </div>
    );
};

export default User;