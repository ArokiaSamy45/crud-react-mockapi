import { createContext, useEffect, useState } from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import { AddUser } from './Components/AddUser';
import EditUser from './Components/EditUser';
import { Nopage } from './Components/NoPage';
import  UserComponent  from './Components/UserComponent';
import { UserDetails } from './Components/UserDetails';
import MentorComponent from './Components1/UserComponent';
import { AddMentor } from './Components1/AddUser';
import { MentorDetails } from './Components1/UserDetails';
import EditMentor from './Components1/EditUser';


export const cont = createContext(null)

function App() {
const [user, setUser] = useState([])
const [user1, setUser1] = useState([])
  
useEffect(()=>{
  const getUserDetails = async()=>{
    try{
      const response = await fetch("https://64100379864814e5b644b839.mockapi.io/users",{
        method: "GET",
      });
      const data = await response.json()
      setUser(data)
      if(!data){
        console.log("unable to fetch data")
      }
    } catch (error) {
      console.log(error)
    }
  }
  getUserDetails();
},[])

useEffect(()=>{
  const getUserDetails1 = async()=>{
    try{
      const response = await fetch("https://64100379864814e5b644b839.mockapi.io/users1",{
        method: "GET",
      });
      const data1 = await response.json()
      setUser1(data1)
      if(!data1){
        console.log("unable to fetch data")
      }
    } catch (error) {
      console.log(error)
    }
  }
  getUserDetails1();
},[])
  return (
    <div className="App">
      <cont.Provider value={{user, setUser, user1, setUser1}}>
      <Switch>
      
        <Route exact path="/">
        <UserComponent/>
        </Route>
        
        <Route path="/add/user">
          <AddUser/>
        </Route>

        <Route path="/edit/:id">
            <EditUser/>
        </Route>

        <Route path="/user/:id">
           <UserDetails/>
        </Route>

        <Route path="/mentor/dashboard">
             <MentorComponent/>
        </Route>

        <Route path="/add/mentor">
          <AddMentor/>
        </Route>
        
        <Route path="/mentorEdit/:id">
            <EditMentor/>
        </Route>

        <Route path="/mentor/:id">
           <MentorDetails />
        </Route>

        <Route path = "**">
            <Nopage/>
        </Route>
      
      </Switch>
      </cont.Provider>
    </div>
  );
}

export default App;