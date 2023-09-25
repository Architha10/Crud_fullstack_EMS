import React, {  useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useParams } from "react-router-dom";




const ViewEmployeeComponent =()=>{
    const {id} = useParams();
    const [employee,setEmployee]= useState({});
    
    useEffect(()=>{
        if(id){
            EmployeeService.getEmployeeById(id).then(res =>{
                console.log("then",res);
                setEmployee({
                    first_Name :res.data.first_Name,
                    last_Name :res.data.last_Name,
                    email_Id :res.data.email_Id

                });
            });
        }

    },[]);
    

    
    return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> <b>Employee First Name:</b> </label>
                            <div> { employee.first_Name }</div>
                        </div>
                        <div className = "row">
                            <label> <b>Employee Last Name:</b> </label>
                            <div> { employee.last_Name }</div>
                        </div>
                        <div className = "row">
                            <label> <b>Employee Email ID:</b>  </label>
                            <div> { employee.email_Id }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    
}

export default ViewEmployeeComponent