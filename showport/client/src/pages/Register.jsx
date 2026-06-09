import {useState} from "react";
import axios from "axios";

export default function Register(){

const [form,setForm]=useState({
fullName:"",
email:"",
password:""
});

const submit = async(e)=>{

e.preventDefault();

await axios.post(
"http://localhost:5000/api/auth/register",
form
);

};

return(

<form onSubmit={submit}>

<input
placeholder="Full Name"
/>

<input
placeholder="Email"
/>

<input
placeholder="Password"
/>

<button>
Register
</button>

</form>

);

}
