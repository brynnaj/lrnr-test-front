// src/components/Account.js
import React from 'react';

const Account = () => {
  return <div>
    <h1>Account</h1>

    <div className='streak'>
        <h2>Streak</h2>
        <p>You have a streak of 5 days</p>
    </div>
    <div className='platinum-quizzes'>
        <h2>Platinum Quizzes</h2>
        <p>golang - intermediate</p>
        <p>javascript - beginner</p>
        <p>AWS - beginner</p>
    </div>
    <div className='level'>
        <h2>lrnr Level: 2</h2>
        <p>150/200 xp</p>
    </div>
  </div>;
};

export default Account;
