import { EmployeeRepository } from './../repository/employee.repository';
import { EmployeeDto } from '../dtos/employee.dto';
import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Employee } from 'src/schemas/employee.schema';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async getAllEmployees(): Promise<EmployeeDto[]> {
    return await this.employeeRepository.getAllEmployees();
  }

  async getEmployeeById(id: number) {
    // return await this.employeeModel.findById(id);
  }

  async createEmployee(newEmployee: EmployeeDto): Promise<EmployeeDto> {
    return await this.employeeRepository.createEmployee(newEmployee);
  }
}
