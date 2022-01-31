import { User } from './user.model';

export interface Feedback {
  f_id: number;
  user: User;
  name: string;
  email: string;
  feedback: string;
}
