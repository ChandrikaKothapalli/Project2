import React from 'react';
import data from './data.json';
import icon from "./smile.svg";

let Resume=(props)=>
{
    let info= Object.values(props.location.index.value);
    let person=data.profiles[info];
    console.log(person);
    return (
        <div className="parent">
            <div className="child">
                <img src={icon} alt="profile"></img>
                <h3> {person.basics.name} </h3>
                <a href={"mail to"+person.basics.email} > {person.basics.email}</a>
                <br></br>
                <a href={"tel:"+person.basics.mobile} >{person.basics.mobile}</a>
                <hr></hr>
            </div>
            <div className="child2">
                <h3>Educational Qualifications</h3>
                {person.education.map((i,j) =>(
                <div key={j}>
                    <h4>{i.degree}</h4>
                    <ul>
                        <li>{i.percentage+"%"}</li>
                        <li>{i.Institute}</li>
                    </ul>
                    </div>
                ))}
                <hr></hr>
                <h3>Skills</h3>
                {person.skills.map((x,y) =>(
                    <div>
                         <h4>{x.type}</h4>
                         {x.values.map((k,l)=>(
                            <div key={l} style={
                                {
                                display:"inline"}}> 
                                <span className="skills">{k}</span>
                             </div>
                         ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Resume;