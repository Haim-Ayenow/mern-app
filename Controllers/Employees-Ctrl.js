const res = require("express/lib/response")
const Employees=require(`../Models/Employees-Model`)


const GetEmployees= async (request,response)=>{
await Employees.find()
.then((result)=>response.send(result))
.catch(err => response.status(404).send({massage:err}))
}

const GetEmployee=async (request,response)=>{
   await Employees.findById(EmployeeItem=>EmployeeItem===parseInt(request.params.id))
   .then((result)=>response.send(result))
   .catch(err=>response.status(404).send({massage:err}))
}

const AddEmployee=(request,response)=>{
 
}

const UpdateEmployee=(request,response)=>{

}

const DeleteEmployee=(request,response)=>{

}

module.exports={GetEmployees,GetEmployee,AddEmployee,UpdateEmployee,DeleteEmployee}