import React from 'react';
import './App.css';
import Profile from "./profile/Profile";
import walter from './photo.jpg'

function App() {
  return (
<div>
  <Profile > <img src={walter} alt="ppp" style={{width:"50%"}}     /> </Profile>
</div>
)

}

export default App;
