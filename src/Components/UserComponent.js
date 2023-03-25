import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";
import { cont } from "../App";



export default function UserComponent(){
const history = useHistory();
const {user, setUser} = useContext(cont);
   
const deleteUser = async (idx)=>{
  try {
     
    const response = await fetch(`https://64100379864814e5b644b839.mockapi.io/users/${idx}`,{
      method: "Delete"
    })
    const data = await response.json();
    
    const alterList = user.filter((per)=>per.id !== idx);
      setUser(alterList)
    if(!data){
      console.log("cound't'delete data")
    }
  } catch (error) {
     console.log(error)
  }
 }
  
    return (
        <BaseApp
        title= "User Details">
          <div className="user-content">
             {user.map((person, idx)=>(
                <div key ={idx} className="user-card">
                    <h1>{person.name}</h1>
                    <p>Batch : {person.batch}</p>
                    <p>Email : {person.email}</p>
                    <p>Exp : {person.experience}</p>

                    <div className="btn-group">

                        <button 
                        onClick={()=>history.push(`/edit/${person.id}`)}
                        className="btn edit-btn">
                          Edit</button>

                        <button 
                        className="btn view-btn"
                        onClick={()=>history.push(`/user/${idx}`)}
                        >View</button>

                        <button 
                        className="btn del-btn"
                        onClick={()=>deleteUser(person.id)}
                        >Delete</button>
                        
                    </div>

                </div>
             ))}
          </div>
        </BaseApp>
    )
}