import axios from "axios";
import { Link } from "react-router-dom";
function StudentListRow(props){
    //const {_id,name,email,rollno} = props.obj // this method is called Object Destruction

    const handleClick = () =>{
            axios.delete("http://localhost:4000/studentRoute/delete-student/"+props.obj._id)
            .then((res)=>{
                if(res.status === 200){
                    alert("Record Deleted Successfully");
                    window.location.reload()
                }
                else{
                    return Promise.reject();
                }
            })
            .catch((err)=>{
                alert(err);
            })
    }
    return (
        <tr>
            <td>{props.obj.name}</td>
            <td>{props.obj.email}</td>
            <td>{props.obj.rollno}</td>
            <td>
                <button className="btn btn-success"><Link className="text-decoration-none text-light" to={"/edit-student/"+props.obj._id}>Edit</Link></button>
                <button onClick={handleClick} className="btn btn-danger ms-2">Delete</button>
            </td>
        </tr>
    )
}


export default StudentListRow;