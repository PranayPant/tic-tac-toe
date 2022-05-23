export interface UserRequest {
    email: string;
}

export interface UserResponse {
    success: boolean;
    token: string;
}
