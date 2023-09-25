import axios from 'axios';

const EMPLOYEE_API_BASE_URL ="http://localhost:8888/api/v1/employees";



     

class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployee(employeeData){
        return axios.post(EMPLOYEE_API_BASE_URL, employeeData);
    }
    getEmployeeById(id){
        return axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);
    }
    updateEmployee(id,employeeData){
        return axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`,employeeData);
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/"+id);
    }
    
  


}

export default new EmployeeService()