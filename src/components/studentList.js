import axios from "axios";
import {useEffect,useState} from 'react';
import StudentListRow from "./studentListRow";

function StudentList(){
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/studentRoute/")
        .then((res)=>{
            if(res.status===200){
                setArr(res.data);
            }
            else{
                return Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })
    },[])
const ListItems = ()=>{
    return arr.map((val,ind)=>{
        return <StudentListRow key={ind} obj={val}/>
    })
}

    return(
        <table className="table table-bordered table-striped table-success">
            <thead>
                <tr>
                <th className="text-center">Name</th>
                <th className="text-center">email</th>
                <th className="text-center">Roll No</th>
                <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}

            </tbody>
        </table>
        )
}

export default StudentList;