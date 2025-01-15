import { AuthResponse, LoginCredentials, SignupCredentials } from '@/types/auth.types';
import axios, { AxiosInstance } from 'axios';

class AuthService {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: process.env.NEXT_PUBLIC_API_URL,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
    }

    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        try {
            const response = await this.api.post('/api/auth/login', credentials);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async signup(credentials: SignupCredentials): Promise<AuthResponse> {
        try {
            const response = await this.api.post('/api/auth/register', credentials);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    private handleError(error: any): Error {
        if (error.response) {
            return new Error(error.response.data.message || 'Authentication failed');
        }
        return new Error('Network error');
    }
}

export default new AuthService();