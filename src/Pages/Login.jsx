import React, {useState} from 'react';
import { supabase } from '../client';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName:'', email:'',password:'',
  })
  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }
  async function handleSubmit(e){
    e.preventDefault()
    try{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
        })
        
        if(error) throw error
        console.log(data);

        navigate('/home')


    } catch (error){
      alert(error)
    }
  }

  return (
    <>
      <div className="App d-flex min-vh-100 bg-light py-4 py-xl-5">
        <div className="container m-auto">
          <div className="row justify-content-center">
            <div className='col-12 col-md-8 col-xl-6'>
              <div className='bg-white p-4 p-xl-5 shadow-sm rounded-3'>
              <h1 className="text-center mb-4">Login</h1>
                <form className="row gy-4" onSubmit={handleSubmit}>
                  <div className="col-12">
                    <label htmlFor="userEmail" className="form-label">Email</label>
                    <input type="text" name="email" id="userEmail" className="form-control" placeholder="" onChange={handleChange}/>
                  </div>
                  <div className="col-12">
                    <label htmlFor="userPass" className="form-label">Password</label>
                    <input type="password" name="password" id="userPass" className="form-control" placeholder="" onChange={handleChange}/>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                  </div>
                  <div className="col-12 d-flex justify-content-end">
                    <p>Don't have a Account? <Link to="/">Sign up</Link></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}