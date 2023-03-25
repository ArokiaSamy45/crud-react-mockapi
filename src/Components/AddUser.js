import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import  Button  from "react-bootstrap/Button";
import { cont } from "../App";



export function AddUser(){
    const history = useHistory()
    const {user, setUser} = useContext(cont);
    //defining states
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [batch, setBatch]= useState("");

    const addNewUser = async(e)=>{
        const newUser = {
            id,
            name,
            email,
            batch,
            experience
        }
        e.preventDefault();
        try {
     
            const response = await fetch("https://64100379864814e5b644b839.mockapi.io/users",{
              method: "Post",
              body : JSON.stringify(newUser),
              headers: {
                "Content-Type": "application/json",
              },
            })
            const data = await response.json();
           
            
           setUser([...user, data]);
           history.push("/")
          } catch (error) {
             console.log(error)
          }
    }
    
    return (
        <BaseApp
        title={"Add a New User"}
        >
             <div className="container-fluid">
                <Form className="user">
                    <Card style={{ width: '25rem' }}>

                       <div className="form-group"> 
                <input type="text" className="form-control form-control-user"
                placeholder="Id"
                value ={id}
                onChange={(event)=>setId(event.target.value)}
                />
                </div>
                <br />
<div className="form-group"> 
                <input type="text" className="form-control form-control-user"
                placeholder="Name"
                value= {name}
                onChange={(event)=>setName(event.target.value)}
                />
</div>
<br />
<div className="form-group"> 
                <input type="text" className="form-control form-control-user"
                placeholder="Email"
                value= {email}
                onChange={(event)=>setEmail(event.target.value)}
                />
</div>
<br />
<div className="form-group"> 
                <input type="text" className="form-control form-control-user"
                placeholder="Experience"
                value = {experience}
                onChange={(event)=>setExperience(event.target.value)}
                />
</div>
<br />
<div className="form-group"> 
                <input type="text" className="form-control form-control-user"
                placeholder="Batch"
                value = {batch}
                onChange={(event)=>setBatch(event.target.value)}
                />
</div>
<br />

                <Button className="Adduser"
                variant="primary"
                onClick={addNewUser}
                >Add</Button>
                </Card>
                </Form>
        </div>
        </BaseApp>
    )
}

