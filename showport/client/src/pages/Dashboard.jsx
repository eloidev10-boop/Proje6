import {useEffect,useState} from "react";
import axios from "axios";

export default function Teachers(){

const [teachers,setTeachers]=useState([]);

useEffect(()=>{

axios.get(
"http://localhost:5000/api/teachers"
)
.then(res=>setTeachers(res.data));

},[]);

return(

<div>

<h1>Teachers</h1>

{
teachers.map(t=>(
<div key={t._id}>

<img src={t.photo} />

<h2>{t.fullName}</h2>

<p>{t.subject}</p>

</div>
))
}

</div>

);

}
