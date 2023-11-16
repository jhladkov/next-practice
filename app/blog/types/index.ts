export interface PostsFetch {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface ErrorPageInterface {
    error: Error
}