import { useParams } from "react-router-dom";
import StudentForm from "./studentForm";
import { useEffect,useState } from "react";
import axios from "axios";


function EditStudent(){
    const {id} = useParams();
    const [initialvalue,setInitialvalue] = useState({name:"",email:"",rollno:""});
    const [newData,setNewData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/studentRoute/update-student/"+id)
        .then((res)=>{
            if(res.status===200){
                const {name,email,rollno} = res.data;
                setInitialvalue({name,email,rollno});
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })

    },[id])

    const getState = (childData) =>{
        setNewData(childData);
    }

    const handleSubmit =()=>{
        const data = {name:newData[0],email:newData[1],rollno:newData[2]}
        axios.put("http://localhost:4000/studentRoute/update-student/"+id,data)
        .then((res)=>{
            if(res.status===200){
                alert("Record Updated Successfully");
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} namevalue = {initialvalue.name} 
                         emailvalue={initialvalue.email} 
                         rollnovalue={initialvalue.rollno}/>
        </form>

    )
}

export default EditStudent;