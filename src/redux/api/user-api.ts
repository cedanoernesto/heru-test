import axios from 'axios';
import { User } from '../../models/user';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});
export const getUsers = async (): Promise<User[]> => {
  try {
    const users = await axiosInstance.get('users')
    return users.data;
  } catch(err) {
    console.error(err);
  }
}