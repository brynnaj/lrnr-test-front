// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  return <div>

     
    

      <div class="container mt-3 mb-3">
    <div class="container">
    
    <Link to="/" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={Logo} alt="website homepage" style={{ maxWidth: '40%', maxHeight: '40%' }} />
    </Link>


        <div class="row text-center">
            <p class="h5 col-12">Your guided path to programming enlightenment</p>
        </div>
        <div class="row text-center">
            <button class="btn btn-primary btn-sm" onclick="login()">Begin Journey</button>
        </div>
    </div>
</div>

<div class="container mt-3 mb-3">
    <div class="row">
        <div class="col-12 col-md-4">
            <div class="text-center">
                <h2 class="text-primary"><i class="bi bi-lightning-charge-fill"></i></h2>
                <p class="h5">Personalized Quizzes</p>
                <p>Greetings, young padawan. Are you ready to embark on a journey of personalized enlightenment through the art of coding? Our app can create custom quizzes that align with your coding skills and interests...</p>
            </div>
        </div>

        <div class="col-12 col-md-4">
            <div class="text-center">
                <h2 class="text-primary"><i class="bi bi-currency-dollar"></i></h2>
                <p class="h5">Rewarding</p>
                <p>Our app is designed to be both challenging and rewarding, so you can learn new concepts while enjoying the process...</p>
            </div>
        </div>

        <div class="col-12 col-md-4">
            <div class="text-center">
                <h2 class="text-primary"><i class="bi bi-person-fill"></i></h2>
                <p class="h5">Personal SME</p>
                <p>Welcome to the path of knowledge. Our app is like having a personal subject matter expert at your side...</p>
            </div>
        </div>
    </div>
</div>

    </div>;
};

export default Home;
