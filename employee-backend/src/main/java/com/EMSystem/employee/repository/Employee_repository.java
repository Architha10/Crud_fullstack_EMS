package com.EMSystem.employee.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.EMSystem.employee.model.Employee;

@Repository
public interface Employee_repository extends JpaRepository<Employee,Long>{

	
	

}
 