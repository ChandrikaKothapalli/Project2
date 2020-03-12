import React from "react";
import data from "./data.json";
import icon from "./smile.svg";
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from "./Resume";

let Profile=()=>{
    const profile=data.profiles;
    return(
        
        <div className="parent">
            <BrowserRouter>
            <Route exact path="/resume" component={Resume}></Route>
            </BrowserRouter>
            {profile.map((i,j) =>(
                /* i for iteration variable and j for j for index value*/
                <div className="child" key={j} >
                    <img src={icon} alt="profile"></img>
                    <h3 >{i.basics.name} </h3>
                    <hr></hr>
                    <a href={"mail to"+i.basics.email} className="link ">{i.basics.email}</a>
                    <br></br>
                    <a href={"tel:"+i.basics.mobile} className="link">{i.basics.mobile}</a>
                    <hr></hr>
                    <Link to={{pathname:"/resume",index:{value:{j}}}} className="btn"> View Profile </Link>
                </div>
            ))}
        </div>
    )
}

export default Profile;