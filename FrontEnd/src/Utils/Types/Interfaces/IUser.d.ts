export default interface IUser {
  userName: string;
  password: string;
  role: string;
  long: number;
  lat: number;
  transport: string;
  mail?: string;
  phone?: string;
}