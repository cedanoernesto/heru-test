import { User } from './../../interfaces/user';
export interface UserDetailsProps {
    route: {
        params: {
            item: User
        }
    }
}