import React from 'react';
import Button from 'react-bootstrap/Button';
import ViewDescriptionModal from './ViewDescriptionModal';

const PatientTable = () => {
    return (
        <div class="table-responsive">
            <table class="table mt-4 table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Patient ID</th>
                        <th scope="col">DOV</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Issue</th>
                        <th scope="col">Description</th>
                        <th scope="col">Medication</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>19/02/2023</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <th scope="col">
                            <ViewDescriptionModal />
                        </th>
                        <th scope="col">
                            <Button className='btn-sm btn-info'>Add/Show</Button>
                        </th>
                        <th scope="col">
                            <Button className='btn-sm btn-warning'>Edit</Button>
                        </th>
                        <th scope="col">
                            <Button className='btn-sm btn-danger'>Delete</Button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>19/02/2023</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <th scope="col">
                            <ViewDescriptionModal />
                        </th>
                        <th scope="col">
                            <Button className='btn-sm btn-info'>Add/Show</Button>
                        </th>
                        <th scope="col">
                            <Button className='btn-sm btn-warning'>Edit</Button>
                        </th>
                        <th scope="col">
                            <Button className='btn-sm btn-danger'>Delete</Button>
                        </th>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>19/02/2023</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <th scope="col">
                            <ViewDescriptionModal />
                        </th>
                        <th scope="col">
                            <Button className='btn-sm btn-info'>Add/Show</Button>
                        </th>
                        <th scope="col">
                            <Button className='btn-sm btn-warning'>Edit</Button>
                        </th>
                        <th scope="col">
                            <Button className='btn-sm btn-danger'>Delete</Button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PatientTable;
