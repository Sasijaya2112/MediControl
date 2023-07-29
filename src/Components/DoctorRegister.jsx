import { Link } from 'react-router-dom';

function DoctorRegister() {
    return (
        <div>
            <p className="display-4 mt-5">
                Registeration
            </p>
            <form className="container-sm mt-5 w-50 border shadow p-5 bg-light">
                <div class="row mb-3">
                    <label for="inputfistname" class="col-sm-2 col-form-label">Firstname</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputfistname" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputlastname" class="col-sm-2 col-form-label">Lastname</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputlastname" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="specialization" class="col-sm-2 col-form-label">Specialization</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="specialization" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="emailid" class="col-sm-2 col-form-label">Email Id</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="emailid" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword1" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword1" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="inputPassword2" class="col-sm-2 col-form-label">Re-enter password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword2" />
                    </div>
                </div>
                <div className=" gap-5 align-items-center">
                    <button type="submit" class="btn btn-danger mx-5 mt-3">Sign Up</button>
                    <Link to="/login">
                        <button type="submit" class="btn btn-primary mt-3">Back to Login</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default DoctorRegister;