import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Employee extends Document {
  readonly _id: mongoose.Schema.Types.ObjectId;
  readonly name: string;
  readonly age: number;
  readonly cpf: string;
  readonly role: string;
  readonly salary: number;
  readonly department: object;
}
