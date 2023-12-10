import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesController } from './employee/employee.controller';
import { EmployeesService } from './employee/employee.service';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { EmployeeRepository } from './repository/employee.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/employee-management'),

    MongooseModule.forFeature([{ name: 'employee', schema: EmployeeSchema }]),
  ],

  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeeRepository],
})
export class AppModule {}
