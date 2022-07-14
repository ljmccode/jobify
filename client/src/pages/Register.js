import { useState, useEffect } from 'react';
import { Logo } from '../components';
import styled from 'styled-components';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {/* name field */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            value={values.name}
            name='name'
            onChange={handleChange}
            className='form-input'
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            value={values.email}
            name='email'
            onChange={handleChange}
            className='form-input'
          />
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            password
          </label>
          <input
            type='password'
            value={values.password}
            name='password'
            onChange={handleChange}
            className='form-input'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>Not a member yet? <button className='member-btn'>Register</button></p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
display: grid;
align-items: center;
.logo{
  display:block;
  margin: 0 auto;
  margin-bottom: 1.38rem;
}
.form{
  max-width: 400px;
  border-top: 5px solid var(--primary-500);
}
h3 {
  text-align: center;
}
p {
  margin: 0;
  margin-top: 1rem;
  text-align: center;
}
.member-btn {
  color: var(--primary-500);
  letter-spacing: var(--letterSpacing);
  cursor: pointer;
  background: transparent;
  border: transparent;
}
`

export default Register;
