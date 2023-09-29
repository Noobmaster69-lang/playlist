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
    <div>
       <img src="/images/imagen.png" alt=""/>  
       <article>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id="password" />
          </div>
          <button>Submit</button>
        </form>
        <p>Do you have an account? <Link to='/auth/register'>Go to register</Link></p>
       </article>
    </div>
  )
}

export default LoginPages