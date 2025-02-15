import axios from "axios"
import LoginForm from "../component/LoginForm"
import { useNavigate } from "react-router-dom"
const Login = () =>{
    const navigate = useNavigate();
    const handleLogin = (data)=>{
         axios.post(`http://localhost:4000/api/v1/auth/login`,data)
         .then(res => {
            alert('login Successfull');
            navigate('/home')
         })
         .catch(err=>{
            alert(err.response.data.message)
            console.log(err);
         })
    }
    return(
        <LoginForm login={handleLogin}/>
    )
}
export default Login;