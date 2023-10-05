import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const RegisterPages = () => {

  const { reset, handleSubmit, register } = useForm()
  const { registerUser } = useAuth()


  const submit = data => {
    registerUser(data)
    reset({
        name: '',
        email: '',
        password: ''
    })
  }  

  return (
    <div className="formuser_container"> 
        <img id="priI" src="/images/imagen2.png" alt="" />
        <article>
        <form className="formuser" onSubmit={handleSubmit(submit)} >
                    <h2 className="reg" >Register</h2>
                    <div className="formuser_group">
                        <label className="formuser_label" htmlFor="email">Email:</label>
                        <input className="formuser_input" {...register('email')} type="email" id="email" />
                    </div>
                    <div className="formuser_group">
                        <label className="formuser_label" htmlFor="name">Name:</label>
                        <input className="formuser_input" {...register('name')} type="text" id="name" />
                    </div>
                    <div className="formuser_group">
                        <label className="formuser_label" htmlFor="password">Password:</label>
                        <input className="formuser_input" {...register('password')} type="password" id="password" />
                    </div>
                    <button className="formuser_btn">Create</button>
                </form>
                <p className="goL">Are you register? <Link to='/auth/login'>Go to login</Link></p>
        </article>
    </div>
  )
}

export default RegisterPages