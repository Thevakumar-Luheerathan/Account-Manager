
export const USERNAME_COOKIE = 'username';

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    username: string;
}

export interface SignupCredentials {
    username: string;
    email: string;
    password: string;
}