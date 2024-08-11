export interface IResponse<T> {
    isSuccess: boolean;
    data: ResponseData<T>;
}

export interface ResponseData<T> {
    Message: string;
    data: T;
}