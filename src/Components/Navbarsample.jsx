import React from 'react';

const Navbarsample = () => {
    return (
        <div>
      <ul class="nav nav-underline mt-3 mx-3 justify-content-end">
                <li class="nav-item mx-3">
                    <Link to="/home" style={{ textDecoration: "none" }}>
                        <a class="nav-link active">Home</a>
                    </Link>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#">Profile</a>
                </li>
                <li class="nav-item mx-3">
                    <Link to="/reports" style={{ textDecoration: "none" }}>
                        <a class="nav-link" href="#">Reports</a>
                    </Link>
                </li>
                <li class="nav-item mx-3 align-item-end">
                    <Link to="/login">
                        <button type="submit" class="btn btn-danger">Log out</button>
                    </Link>
                </li>
            </ul>
            <hr />
        </div>
    );
}

export default Navbarsample;
