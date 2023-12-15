import { Employee } from 'src/schemas/employee.schema';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EmployeesService } from './employee.service';
import { EmployeeDto } from 'src/dtos/employee.dto';
import { IEmployee } from 'src/interfaces/employee.interface';
import mongoose from 'mongoose';
import { UpdateEmployeeDto } from 'src/dtos/updateEmployee.dto';
@Controller('/employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}

  @Get('/')
  async getAllEmployees(): Promise<IEmployee[]> {
    return await this.employeeService.getAllEmployees();
  }
  @Get('/:id')
  async getEmployeeById(@Param('id') id: string): Promise<IEmployee> {
    return await this.employeeService.getEmployeeById(id);
  }

  @Post('/create')
  async createEmployee(@Body() newEmployee: EmployeeDto): Promise<IEmployee> {
    return await this.employeeService.createEmployee(newEmployee);
  }

  @Patch('/edit/:id')
  async updateEmployee(
    @Param('id') id: string,
    @Body() updatedEmployee: UpdateEmployeeDto,
  ): Promise<IEmployee> {
    console.log('controller', updatedEmployee);
    return await this.employeeService.updateEmployee(id, updatedEmployee);
  }

  @Patch('/update/:id')
  async editEmployee(
    @Param('id') id: string,
    @Body() newEmployee: UpdateEmployeeDto,
  ): Promise<IEmployee> {
    console.log('controller', newEmployee);

    return await this.employeeService.editEmployee(id, newEmployee);
  }

  @Delete('/:id')
  async deleteEmployee(@Param('id') id: string) {
    return await this.employeeService.deleteEmployee(id);
  }
}
