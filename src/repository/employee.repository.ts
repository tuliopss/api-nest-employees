import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmployeeDto } from 'src/dtos/employee.dto';
import { Employee } from 'src/schemas/employee.schema';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectModel('employee') private readonly employeeModel: Model<Employee>,
  ) {}

  async getAllEmployees(): Promise<EmployeeDto[]> {
    return await this.employeeModel.find({}, { __v: false }).exec();
  }

  async createEmployee(newEmployee: EmployeeDto): Promise<EmployeeDto> {
    const createdEmployee = new this.employeeModel(newEmployee);
    return await createdEmployee.save();
  }
}
