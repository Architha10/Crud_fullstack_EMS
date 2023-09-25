package com.EMSystem.employee.model;

import javax.annotation.processing.Generated;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;


@Entity
@Table(name ="employees")
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
     private long id;
	
	 @Column(name = "first_name")
     private String first_Name;
	 
	 @Column(name = "last_name")
     private String last_Name;
	 
	 @Column(name = "email_id")
     private String email_Id;
     
     public Employee() {
    	 
     }
    
    
	public Employee(String first_Name, String last_Name, String email_Id) {
		super();
		this.first_Name = first_Name;
		this.last_Name = last_Name;
		this.email_Id = email_Id;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirst_Name() {
		return first_Name;
	}
	public void setFirst_Name(String first_Name) {
		this.first_Name = first_Name;
	}
	public String getLast_Name() {
		return last_Name;
	}
	public void setLast_Name(String last_Name) {
		this.last_Name = last_Name;
	}
	public String getEmail_Id() {
		return email_Id;
	}
	public void setEmail_Id(String email_Id) {
		this.email_Id = email_Id;
	}
     
}
