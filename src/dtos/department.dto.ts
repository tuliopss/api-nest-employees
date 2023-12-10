// import { Department } from './../schemas/department.schema';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Employee } from 'src/schemas/employee.schema';
import { EmployeeDto } from './employee.dto';

export class DepartmentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  employees: EmployeeDto[];
}
//
