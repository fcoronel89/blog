import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../api/auth'

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    userName: '',
    email: '',
    password: '',
  })

  const [err, setErr] = useState(null)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await register(inputs)
      navigate('/login')
    } catch (err) {
      console.log(err);
      setErr(err.response.data.message);
    }
  }

  console.log(inputs)
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" name='userName' placeholder='userName' value={inputs.userName} onChange={handleChange} />
        <input required type="email" name='email' placeholder='email' value={inputs.email} onChange={handleChange} />
        <input required type="password" name='password' placeholder='password' value={inputs.password} onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register