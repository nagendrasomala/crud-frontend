
import StudentForm from "./studentForm";
import React, { useState } from 'react';
import Axios from "axios";
function CreateStudent(){
    const [arr,setArr] = useState([]);
    const getState = (childData)=>{
        setArr(childData);
    }

    const handleSubmit = () =>{
        const data = {name:arr[0],email:arr[1],rollno:arr[2]};
        //Axios.post("http://localhost:4000/studentRoute/create-student",data)
        Axios.post("https://crud-deployment-backend-cztd.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status===200){
                alert("record added Successfully");
                window.location.reload()
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })
    }

    return( 
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}/>
        </form>
    )
}
export default CreateStudent;