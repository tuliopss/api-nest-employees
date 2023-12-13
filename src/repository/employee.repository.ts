import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { EmployeeDto } from 'src/dtos/employee.dto';
import { UpdateEmployeeDto } from 'src/dtos/updateEmployee.dto';
import { IEmployee } from 'src/interfaces/employee.interface';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectModel('employee') private readonly employeeModel: Model<IEmployee>,
  ) {}

  async getAllEmployees(): Promise<IEmployee[]> {
    return await this.employeeModel.find({}, { __v: false }).exec();
  }

  async getEmployeeById(id: string): Promise<IEmployee> {
    return await this.employeeModel.findById(id, { __v: false });
  }

  async createEmployee(newEmployee: EmployeeDto): Promise<IEmployee> {
    const createdEmployee = new this.employeeModel(newEmployee);
    return await createdEmployee.save();
  }

  async deleteEmployee(id: string) {
    return await this.employeeModel.findOneAndDelete({ _id: id });
  }

  async updateEmployee(
    id: string,
    newEmployee: UpdateEmployeeDto,
  ): Promise<IEmployee> {
    console.log('repo', newEmployee);
    return await this.employeeModel.findByIdAndUpdate(
      { _id: id },
      { $set: newEmployee },
      { new: true },
    );
  }
}
