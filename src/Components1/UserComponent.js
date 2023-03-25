import {React, useContext} from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";
import { cont } from "../App";




export default function MentorComponent(){
const history = useHistory();
const {user1, setUser1} = useContext(cont);

   
const deleteUser = async (idx)=>{
  try {
     
    const response = await fetch(`https://64100379864814e5b644b839.mockapi.io/users1/${idx}`,{
      method: "Delete"
    })
    const data1 = await response.json();
    
    const alterList = user1.filter((per)=>per.id !== idx);
      setUser1(alterList)
    if(!data1){
      console.log("cound't'delete data")
    }
  } catch (error) {
     console.log(error)
  }
 }
  
    return (
        <BaseApp
        title= "Mentor Details">
          <div className="user-content">
             {user1.map((person, idx)=>(
                <div key ={idx} className="user-card">
                    <h1>{person.name}</h1>
                    <p>Batch : {person.batch}</p>
                    <p>Email : {person.email}</p>
                    <p>Exp : {person.experience}</p>

                    <div className="btn-group">

                        <button 
                        onClick={()=>history.push(`/mentorEdit/${person.id}`)}
                        className="btn edit-btn">
                          Edit</button>

                        <button 
                        className="btn view-btn"
                        onClick={()=>history.push(`/mentor/${idx}`)}
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