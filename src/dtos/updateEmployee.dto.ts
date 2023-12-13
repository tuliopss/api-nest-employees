import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { DepartmentDto } from './department.dto';
import { PartialType } from '@nestjs/mapped-types';
import { EmployeeDto } from './employee.dto';

console.log(EmployeeDto);

class testDto {
  name: string;
  age: number;
  cpf: string;
  role: string;
  salary: number;
}

export class UpdateEmployeeDto extends PartialType(testDto) {}
