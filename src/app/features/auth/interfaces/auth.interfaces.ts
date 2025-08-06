export interface SignInResponse {
  token: string;
  user: SignUpResponse;
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
  username: string;
  email: string;
  role: string;
}
