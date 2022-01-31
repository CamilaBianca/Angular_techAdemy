import { User } from './user.model';

export interface FeedbackSend {
  user: User;
  name: string;
  email: string;
  feedback: string;
}
