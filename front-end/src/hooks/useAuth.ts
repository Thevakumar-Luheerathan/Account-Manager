import { useState } from 'react';
import { useRouter } from 'next/navigation';
import authService from '@/services/auth.service';
import { LoginCredentials, SignupCredentials, USERNAME_COOKIE } from '@/types/auth.types';
import Cookies from 'js-cookie';


export function useAuth() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const login = async (credentials: LoginCredentials) => {
        try {
            setLoading(true);
            setError(null);
            const response =    await authService.login(credentials);
            Cookies.set(USERNAME_COOKIE, response.username);
            if (response.username) {
                router.push('/dashboard');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    const signup = async (credentials: SignupCredentials) => {
        try {
            setLoading(true);
            setError(null);
            await authService.signup(credentials);
            setSuccess('Registration successful! Please sign in.');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Signup failed');
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        Cookies.remove('username');
        router.push('/');
    };

    return { login, signup, logout, loading, error, success };
}