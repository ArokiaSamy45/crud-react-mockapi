import {React, useContext} from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../Core/Base";
import { cont } from "../App";

export function MentorDetails(){
    const {user1} = useContext(cont);
    const {id} = useParams();
    const person = user1[id];
    return (
        <BaseApp
        title = {"Mentor details"}
        >
           <div className="user-content">
                <div  className="user-card">
                    <h1>{person.name}</h1>
                    <p>Batch : {person.batch}</p>
                    <p>Email : {person.email}</p>
                    <p>Exp : {person.experience}</p>
                    </div>
                </div>
        </BaseApp>
    )
}