import { User } from './../../interfaces/user';
export interface WelcomeScreenProps  {
  user: {
    loading: boolean
    users: User[]
  }
  getAllUsers: {
    (): Promise<User[]>
  }
  navigation: any
}