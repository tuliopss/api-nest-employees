import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { HydratedDocument } from 'mongoose';
import { Employee } from './employee.schema';

export type DepartmentDocument = HydratedDocument<Department>;

@Schema()
export class Department {
  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }] })
  employees: Employee[];
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
