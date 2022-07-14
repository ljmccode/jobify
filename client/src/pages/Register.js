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
          <label for='name' className='form-label'>
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
          <label for='email' className='form-label'>
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
          <label for='password' className='form-label'>
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
        <p>Not a member yet? Register</p>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
`

export default Register;
