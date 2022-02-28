const EmployeesCtrl=require(`../Controllers/Employees-Ctrl`)
const EmployeesRouter=require(`express`).Router()


EmployeesRouter.get(`/`,EmployeesCtrl.GetEmployees)

EmployeesRouter.get(`/:id`,EmployeesCtrl.GetEmployee)

EmployeesRouter.post(`/`,EmployeesCtrl.AddEmployee)

EmployeesRouter.put(`/`,EmployeesCtrl.UpdateEmployee)

EmployeesRouter.delete(`/`,EmployeesCtrl.DeleteEmployee)

module.exports=EmployeesRouter