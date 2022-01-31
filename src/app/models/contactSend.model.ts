import { User } from "./user.model";

export interface ContactSend {
    user: User;
    name: string;
    phoneNo: string;
    email: string;
    messege: string;
  }