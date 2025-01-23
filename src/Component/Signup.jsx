import React from "react"
export default function Signup() {
  return (
    <>
      <h1 className="text-center mb-4">SignUp</h1>

      <form action="" className="row gy-4">
        <div className="col-12">
            <label for="" class="form-label">User Name</label>
            <input type="text" name="" id="" class="form-control" placeholder="" />
        </div>
        <div className="col-12">
            <label for="" class="form-label">Email</label>
            <input type="text" name="" id="" class="form-control" placeholder="" />
        </div>
        <div className="col-12">
            <label for="" class="form-label">Password</label>
            <input type="password" name="" id="" class="form-control" placeholder="" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </div>
      </form>      
    </>
  )
}