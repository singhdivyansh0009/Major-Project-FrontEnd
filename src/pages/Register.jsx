import { useState } from "react";
import RegistrationForm from "../component/RegisterationForm"
import UploadProfile from "../component/UploadImage";
// import useNavigate from "react-router-dom";
const Register = () =>{
    const [component,setComponent] = useState('RegisterationForm');
    const [formData,setFormData] = useState(null)
    // const navigate = useNavigate();

    const handleComponent = (data) => {
        setComponent('uploadProfile')
        setFormData(data);
    }
    const handleRegister = (data) =>{
       console.log(data);
    //    axios.post('',data,)
    //    .then(res => {
    //       alert('Registeration Successfull',res);
    //       navigate('/')
    //     })
    //     .catch(err => {
    //          alert('Error',err);
    //     })
    }
    return(
        <>
          {
           component === 'RegisterationForm' ?
           <RegistrationForm changeComponent={handleComponent}/>
           :
           <UploadProfile register={handleRegister} data={formData}/>
          }
        </>    
    )
}

export default Register;