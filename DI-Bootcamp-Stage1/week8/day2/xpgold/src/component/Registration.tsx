import React from 'react'
import { useForm } from '../hooks/useForm'

export default function Registration() {
  const { values, errors, handleChange, handleSubmit } = useForm({
    email: '',
    password: '',
  })

  const onSuccess = (values: { email: string; password: string }) => {
    alert(`Registered: ${values.email}`)
  }

  return (
    <form onSubmit={handleSubmit(onSuccess)}>
      <h2>Registration</h2>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  )
}

