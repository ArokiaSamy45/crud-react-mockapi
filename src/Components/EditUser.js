import React, { useEffect, useState, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import BaseApp from '../Core/Base';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import  Button  from "react-bootstrap/Button";
import { cont } from "../App";

const EditUser = () => {
  const {user, setUser} = useContext(cont);
    const [name, setName] = useState("");
    const [idx, setIdx] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [batch, setBatch]= useState("");

  const {id} = useParams();
  const history = useHistory()

  const selectedUser = user.find((per)=>per.id === id); 

  useEffect(() => {
     setIdx(selectedUser.id)
     setName(selectedUser.name)
     setEmail(selectedUser.email)
     setExperience(selectedUser.experience)
     setBatch(selectedUser.batch)

  }, [selectedUser]);;

//
const updateUser = async ()=>{
  // step 1 : collecting new data
const editIndex = user.findIndex(per => per.id === id)
//chnaged data in the input field
const editedData = {
   id :idx, 
   name, 
   email, 
   experience, 
   batch
}
try {
const response = await fetch(`https://64100379864814e5b644b839.mockapi.io/users/${idx}`, {
  method :"PUT",
  body : JSON.stringify(editedData),
  headers:{
    "Content-Type":"application/json"
  }
});
const data = await response.json();

    //updating the user
    user[editIndex] = data
    setUser([...user]); 
    history.push("/");

} catch (error) {
console.log(error)
}
}

  return (
    <BaseApp
    title={"Edit the user details"}
    >
         <div className='container-fluid'>
          <Form className='user'>
          <Card style={{ width: '25rem' }}>

          <div className="form-group"> 
             <input type="text" className="form-control form-control-user" 
            placeholder="id"
            value ={idx} readOnly
            onChange={(event)=>setIdx(event.target.value)}
            />
 </div>
                <br />
<div className="form-group"> 
             <input type="text" className="form-control form-control-user" 
            placeholder="name"
            value= {name}
            onChange={(event)=>setName(event.target.value)}
            />
</div>
                <br />
<div className="form-group">
             <input type="text" className="form-control form-control-user" 
            placeholder="email"
            value= {email}
            onChange={(event)=>setEmail(event.target.value)}
            />
</div>
                <br />
<div className="form-group">
             <input type="text" className="form-control form-control-user" 
            placeholder="experience"
            value = {experience}
            onChange={(event)=>setExperience(event.target.value)}
            />
</div>
                <br />
<div className="form-group">
             <input type="text" className="form-control form-control-user" 
            placeholder="batch"
            value = {batch}
            onChange={(event)=>setBatch(event.target.value)}
            />
</div>
                <br />

                <Button className="Edituser"
            onClick={updateUser}
            >Save</Button>
            </Card>
            </Form>
    </div>
    </BaseApp>
  )
}

export default EditUser