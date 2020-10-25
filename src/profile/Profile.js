import React,{Fragment} from 'react';
import '../App.css';
import Profession from '../profile/Profession';
import Bio from '../profile/Bio'; 
import Fullname  from '../profile/Fullname';


function Profile ({children}) {
  const handleclick = (e) =>{
    alert("say my name")
}

  return (
    <div style ={{textAlign: "center"}}>
<Profession profession="I'm Student"/>
<Bio bio= "hello this is my first attempt , im enjoyig coding"/>
<Fullname fullname= "Najmeddine Hanzouli"/>
<Fragment >{children}</Fragment>
<br/>
<button onClick={handleclick} style ={{borderRadius :"5px"}}>About me</button>
        
    </div>
  )
}
export default Profile ;