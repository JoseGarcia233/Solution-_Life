import React from 'react'
import '../css/UserProfile.css'

export default function UserProfile() {
  return (
    <div class="ps">
    <div class="card">
      <div class="circle-photo">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile Pictur" class="t" width="180" height="180px"/>
      </div>
  <div class="paragarph-center">
  <h3 id='NamT' class="title">Name</h3>
  <p class="positon">TEST 1</p>
    <h3 class="title">Last Name</h3>
    <p id='LastN'  class="positon">PALBIN</p>
    <h3 id='NamT' class="title">Rol</h3>
    <p id='LastN'  class="positon">User</p>
    
   </div>
</div>
</div>


  )
}
