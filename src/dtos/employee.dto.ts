import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsPositive,
  IsString,
  Length,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { DepartmentDto } from './department.dto';

export class EmployeeDto {
  name: string;
  age: number;
  cpf: string;
  role: string;
  salary: number;
  // department: Depar
  // @IsNotEmpty()
  // @IsString()
  // @MinLength(2)
  // name: string;

  // @IsNotEmpty()
  // @IsNumber()
  // @IsPositive()
  // age: number;

  // @IsNotEmpty()
  // @Length(11)
  // @MaxLength(11)
  // cpf: string;

  // @IsNotEmpty()
  // role: string;

  // @IsNotEmpty()
  // @IsNumber()
  // @IsPositive()
  // salary: number;

  // @IsNotEmpty()
  // @Type(() => DepartmentDto)
  // @IsNotEmptyObject()
  // @ValidateNested({ each: true })
  // department: DepartmentDto;
}
