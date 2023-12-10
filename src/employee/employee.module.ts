import { Employee, EmployeeSchema } from './../schemas/employee.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesController } from './employee.controller';
import { EmployeesService } from './employee.service';
// import { Employee, EmployeeSchema } from './schemas/Employee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
    ]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
