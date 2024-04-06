import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Registration successful');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className='w-3/4 bg-green-500 rounded-3xl text-black text-xl p-10 mx-auto my-14'>
      <div>
      <h1 className='text-black text-2xl font-semibold text-center'>Register Here</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <input className='p-3 rounded-2xl' type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input className='p-3 rounded-2xl' type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} />
        <input className='p-3 rounded-2xl' type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input className='p-3 rounded-2xl' type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <button className='btn bg-green-800 text-white text-xl' type="submit">Register</button>
      </form>
      </div>
    </div>
  );
};

export default RegisterForm;
