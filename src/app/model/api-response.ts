export interface ApiResponse {
  statusCode: number;
  message: string;
  body: Body;
}

interface Body {
  token: string;
}
