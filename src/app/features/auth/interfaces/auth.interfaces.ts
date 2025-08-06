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
