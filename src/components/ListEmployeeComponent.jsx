import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';
import UsePagination from './UsePagination';


export default class ListEmployeeComponent extends Component {

  

  
  constructor(props){
    super(props)
    this.state = {
       employees :[]
    }
    this.deleteEmployee = this.deleteEmployee.bind(this);
    
  }
  deleteEmployee(id){
      EmployeeService.deleteEmployee(id).then( (res) => {
        this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    });
  }

  
  
  componentDidMount(){
    EmployeeService.getEmployees().then((res)=>{
      this.setState({employees : res.data});
    });
  }

  

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className = "row">
            <Link to="/add-employee">
               <button className="btn btn-primary" style={{marginLeft:"80px"}}><i class="fa fa-plus" aria-hidden="true"></i> Add Employee</button>
            </Link>
           
            
           
        </div>
        <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.employees.map(
                            employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.first_Name}</td>
                                <td>{employee.last_Name}</td>
                                <td>{employee.email_Id}</td>
                                <td>
                                <Link to={`/add-employee/${employee.id}`} className='btn btn-info' href="">Update <i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link> {" "}
                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete <i class="fa fa-trash" aria-hidden="true"></i> </button> {" "}
                                <Link to={`/view-employee/${employee.id}`} className='btn btn-info' href="">View <i class="fa fa-eye" aria-hidden="true"></i></Link>
                                
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
           
            <div><UsePagination/></div>

        </div>
        
      </div>
    )
  }
}
