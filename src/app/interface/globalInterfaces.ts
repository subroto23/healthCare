export type IOptions = {
  page?: string;
  limit?: string;
  sortBy?: string | undefined;
  sortOrder?: string | undefined;
};

export type IAuthGurdUser = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};
