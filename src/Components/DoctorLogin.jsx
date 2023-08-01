import { Link } from 'react-router-dom';

function DoctorLogin() {
  return (
    <div>
      <div className='container'>
        <div className='mt-5'></div>
        <div class="row gap-5">
          <div class="col-sm">
            <img src="https://static.vecteezy.com/system/resources/previews/004/578/683/original/a-patient-consults-a-doctor-and-nurse-free-vector.jpg" class="img-fluid mt-5 d-none d-sm-block" alt="doctor-patient" />
          </div>
          <div class="col-sm">
            <div className="m-5">
              <h1 className='text-primary'>MediControl Login</h1>
            </div>
            <form class='w-75 mx-auto p-5 text-start border shadow bg-light'>
              <div class="mb-3 mt-2">
                <label for="useremail" class="form-label align-items-start">Email address</label>
                <input type="email" class="form-control" id="useremail" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" />
              </div>
              <div class="d-flex justify-content-center gap-3">
                <Link to="/home">
                  <button type="submit" class="btn btn-primary mt-4 align-items-center">Login</button>
                </Link>
                <Link to="/register">
                  <button class="btn btn-danger mt-4 align-items-center">Sign Up</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;