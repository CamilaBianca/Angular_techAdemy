import { User } from "./user.model";

export interface Contact {
    contact_id: number;
    user: User;
    name: string;
    phoneNo: string;
    email: string;
    messege: string;
  }