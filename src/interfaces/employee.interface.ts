import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface IEmployee extends Document {
  _id: mongoose.Schema.Types.ObjectId;
  name: string;
  age: number;
  cpf: string;
  role: string;
  salary: number;
  department: object;
}
