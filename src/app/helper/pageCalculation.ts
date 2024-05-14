type IOptions = {
  page?: string;
  limit?: string;
  sortBy?: string | undefined;
  sortOrder?: string | undefined;
};
type IReturnOptions = {
  limit: number;
  sort: string;
  skip: number;
  sortOrder: string;
  page: number;
};
const calculatePagination = (options: IOptions): IReturnOptions => {
  const page = Number(options?.page) || 1;
  const limit = Number(options?.limit) || 10;
  const sort = options?.sortBy || "createdAt";
  const sortOrder = options?.sortOrder || "desc";
  const skip = (page - 1) * limit;
  return {
    limit,
    sort,
    skip,
    page,
    sortOrder,
  };
};

export default calculatePagination;
