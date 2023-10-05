import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LoginPages = () => {

    const { register, reset, handleSubmit } = useForm()
    const { loginUser } = useAuth()


    const submit = data => {
        loginUser(data)
        reset({
            email: '',
            password: ''
        })
    }

  return (
    <div className="formuser_container2">
       <img id="priI2" src="/images/imagen.png" alt=""/>  
       <article>
        <form className="formuser2" onSubmit={handleSubmit(submit)}>
        <h2 className="reg2" >Login</h2>
          <div className="formuser_group2">
            <label className="formuser_label2" htmlFor="email">Email</label>
            <input className="formuser_input2" {...register('email')} type="email" id="email" />
          </div>
          <div className="formuser_group2">
            <label className="formuser_label2" htmlFor="password">Password</label>
            <input className="formuser_input2" {...register('password')} type="password" id="password" />
          </div>
          <button className="formuser_btn2" >Submit</button>
        </form>
        <p className="goR">Do you have an account? <Link to='/auth/register'> Go to register</Link></p>
       </article>
    </div>
  )
}

export default LoginPages