export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: string;
  profile: UserProfile;
}

export interface UserProfile {
  pictureUrl: string;
  birthday: string;
  bio: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  username: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: string;
}
