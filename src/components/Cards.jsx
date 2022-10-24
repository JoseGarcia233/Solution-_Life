import React from 'react'
import '../css/cards.css'

export default function  Cards() {
  return (
    <div className='containerCard'>
         <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="https://i.postimg.cc/mZdZxCjx/the-last.png" alt='pic'/>
                    <h3>Jobs</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Here you can find Jobs avalible</p>
                        <a href="/List-jobs" class="btn btn-secondary" >Read More</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img  id="pic2"src="https://i.postimg.cc/8k4ZzTXW/lisN.png" alt='pic2'/>
                    <h3>Employess<br/>List</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lis of Employess available</p>
                        <a href="#/">Read More</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="https://i.postimg.cc/JnGhgNnK/express.png" alt=''/>
                    <h3>Expres</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Express Jobs</p>
                        <a href="#/">Read More</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
