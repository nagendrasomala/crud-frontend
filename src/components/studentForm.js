
import React, { useState } from 'react';
function StudentForm(props){
    const [name,setname] = useState(props.namevalue);
    const [email,setemail] = useState(props.emailvalue);
    const [rollno,setrollno] = useState(props.rollnovalue);
    const arr = [name,email,rollno];
    const handleClick=()=>{
        props.getState(arr);
    }
    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
           
                <input defaultValue={props.namevalue} onChange={(event)=>setname(event.target.value)} className="form-control my-3" placeholder="name"></input>
                <input defaultValue={props.emailvalue}onChange={(event)=>setemail(event.target.value)} className="form-control my-3" placeholder="email"></input>
                <input defaultValue={props.rollnovalue}onChange={(event)=>setrollno(event.target.value)} className="form-control my-3" placeholder="rollno"></input>
                <button onClick={handleClick} className="btn btn-success my-3 d-block mx-auto" type='submit'>Submit</button>

           
        </div>
    )
}

export default StudentForm;