// src/components/Account.js
import React from 'react';
import { flameOutline, appsOutline, personCircleOutline } from 'ionicons/icons';


const Account = () => {
  return (
    <>
      <div class="container mt-3 mb-3">
        <div class="container">
          <h1 class="text-primary h1">Account</h1>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="text-center">
              <h2 class="text-primary"><i class="bi bi-fire"></i></h2>
              <img src={flameOutline} alt="Flame Icon" style={{ maxWidth: '8%', maxHeight: '8%' }}/>

              <p class="h3">Streak</p>
              <p>You have a streak of 5 days!</p>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="text-center">
              <h2 class="text-primary"><i class="bi bi-list"></i></h2>
              <img src={appsOutline} alt="List Icon" style={{ maxWidth: '8%', maxHeight: '8%' }}/>

              <p class="h3">Platinum Quizzes</p>
              <ul class="list-unstyled">
                <li>golang - intermediate</li>
                <li>Javascript - beginner</li>
                <li>AWS - beginner</li>
              </ul>
            </div>
          </div>


          <div class="col-12 col-md-4">
            <div class="text-center">
              <h2 class="text-primary"><i class="bi bi-person"></i></h2>
              <img src={personCircleOutline} alt="Person Icon" style={{ maxWidth: '8%', maxHeight: '8%' }}/>

              <p class="h3">lrnr Level: 2</p>
              <p>150/200 xp</p>
            </div>
          </div>
        </div>
        <br /><br />
      </div>

    </>
  )
}

export default Account;
