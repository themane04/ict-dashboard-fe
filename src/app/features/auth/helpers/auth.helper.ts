import {User} from '../interfaces/auth.interface';
import {environment} from '../../../core/consts/environment';

export function getProfileImage(user: User | null | undefined): string {
  return user?.profile?.pictureUrl || environment.config.profilePlaceholderUrl;
}
