import { EmployeeRepository } from './../repository/employee.repository';
import { EmployeeDto } from '../dtos/employee.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import mongoose, { Connection, Model } from 'mongoose';
import { Employee } from 'src/schemas/employee.schema';
import { IEmployee } from 'src/interfaces/employee.interface';
import { UpdateEmployeeDto } from 'src/dtos/updateEmployee.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async getAllEmployees(): Promise<IEmployee[]> {
    const allEmployees = await this.employeeRepository.getAllEmployees();

    if (allEmployees.length == 0) {
      throw new BadRequestException("There aren't employees registered");
    }

    return allEmployees;
  }

  async getEmployeeById(id: string): Promise<IEmployee> {
    const employee = await this.employeeRepository.getEmployeeById(id);

    if (!employee) {
      throw new BadRequestException('Employee not found');
    }

    return employee;
  }

  async createEmployee(newEmployee: EmployeeDto): Promise<IEmployee> {
    console.log('create', newEmployee);

    return await this.employeeRepository.createEmployee(newEmployee);
  }

  async deleteEmployee(id: string) {
    try {
      const employee = await this.employeeRepository.getEmployeeById(id);

      if (!employee) {
        throw new BadRequestException('Employee not found');
      }

      return await this.employeeRepository.deleteEmployee(id);
    } catch (error) {
      throw new BadRequestException('Error request');
    }
  }

  async updateEmployee(id: string, employee: UpdateEmployeeDto) {
    // const existsEmployee = await this.employeeRepository.getEmployeeById(id);

    // if (!existsEmployee) {
    //   throw new BadRequestException('Employee not found');
    // }

    console.log('service', id, employee);
    return await this.employeeRepository.updateEmployee(id, employee);
  }

  async editEmployee(
    id: string,
    newEmployee: UpdateEmployeeDto,
  ): Promise<IEmployee> {
    const existEmployee = await this.employeeRepository.getEmployeeById(id);
    console.log(existEmployee);
    if (!existEmployee) {
      throw new BadRequestException('Employee not found');
    }

    return await this.employeeRepository.editEmployee(id, newEmployee);
  }
}
