import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CreateEmployeeComponent = () => {
    /** Variables and method to collect and store inputes */
    const [first_Name, setFirstName] = useState('');
    const [last_Name, setLastName] = useState('');
    const [email_Id, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const employeeData = { first_Name, last_Name, email_Id }; //bundle the inpute from user

    /**send data to api and navigate when succesful */
    function saveEmployee(e) {
       
        e.preventDefault();

        if (employeeData.first_Name !== "" && employeeData.last_Name !== "" && employeeData.email_Id !== "") {
            /**If id is present in the parameter, it should update else it should save */
            if (id) {
                EmployeeService.updateEmployee(id, employeeData)
                    .then(navigate("/employees"))
                    .catch(e => console.log(e));
            } else {
                EmployeeService.createEmployee(employeeData)
                    .then(navigate("/employees"))
                    .catch(e => console.log(e));
            }

        } else {
            alert("Please, fill in all inputs");
        }
    }

    function title() {
        if (id) {
            return "Update Employee";
        } else {
            return "Add Employee";
        }
    }
    useEffect(() => {
        if (id) {
            EmployeeService.getEmployeeById(id)
                .then(res => {
                    setFirstName(res.data.first_Name);
                    setLastName(res.data.last_Name);
                    setEmail(res.data.email_Id);
                })
                .catch(e => console.log(e));
        }
    }, []);

    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>{title()}</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={first_Name}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        type="text" placeholder='Enter First Name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={last_Name}
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text" placeholder='Enter Last Name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={email_Id}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email" placeholder='Enter Email' />
                                </div>
                                <button onClick={(e) => saveEmployee(e)} className='btn btn-success'>Save</button> {" "}
                                <Link to={"/employees"} className='btn btn-danger' href="">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateEmployeeComponent