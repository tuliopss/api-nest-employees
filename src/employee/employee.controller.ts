import { Employee } from 'src/schemas/employee.schema';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeesService } from './employee.service';
import { EmployeeDto } from 'src/dtos/employee.dto';
@Controller('/employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @Get('/')
  async getAllEmployees(): Promise<EmployeeDto[]> {
    return this.employeeService.getAllEmployees();
  }

  @Post('/create')
  async createEmployee(@Body() newEmployee: EmployeeDto): Promise<EmployeeDto> {
    return await this.employeeService.createEmployee(newEmployee);
  }
}
