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
    <div> 
        <img src="/images/imagen2.png" alt="" />
        <article>
        <form onSubmit={handleSubmit(submit)} >
                    <div>
                        <label htmlFor="email">Email</label>
                        <input {...register('email')} type="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="name">name</label>
                        <input {...register('name')} type="text" id="name" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input {...register('password')} type="password" id="password" />
                    </div>
                    <button>Submit</button>
                </form>
                <p>Are you register? <Link to='/auth/login'>Go to login</Link></p>
        </article>
    </div>
  )
}

export default RegisterPages