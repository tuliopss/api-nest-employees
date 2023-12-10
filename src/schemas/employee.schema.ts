import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { HydratedDocument } from 'mongoose';
import { Department } from './department.schema';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  cpf: string;

  @Prop()
  role: string;

  @Prop()
  salary: number;

  @Prop()
  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Department' })
  department: Department;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
