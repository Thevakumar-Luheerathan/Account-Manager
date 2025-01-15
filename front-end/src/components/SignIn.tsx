'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import ForgotPassword from './ForgotPassword';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Alert } from '@mui/material';

export default function SignIn(props: { disableCustomTheme?: boolean }) {
  const { login, loading, error } = useAuth();
  const router = useRouter();
  const [usernameError, setUsernameError] = React.useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    await login({
      username: formData.get('username') as string,
      password: formData.get('password') as string
    });
  };

  const validateInputs = () => {
    const username = document.getElementById('username') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    let isValid = true;

    // if (!username.value || !/\S+@\S+\.\S+/.test(username.value)) {
    //   setUsernameError(true);
    //   setUsernameErrorMessage('Please enter a valid username address.');
    //   isValid = false;
    // } else {
    //   setUsernameError(false);
    //   setUsernameErrorMessage('');
    // }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/');
    }
  }, []);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: 2,
      }}
    >
      {error && <Alert severity="error">{error}</Alert>}
      <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <TextField
          error={usernameError}
          helperText={usernameErrorMessage}
          id="username"
          type="username"
          name="username"
          placeholder="username"
          autoComplete="username"
          autoFocus
          required
          fullWidth
          variant="outlined"
          color={usernameError ? 'error' : 'primary'}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <TextField
          error={passwordError}
          helperText={passwordErrorMessage}
          name="password"
          placeholder="••••••"
          type="password"
          id="password"
          autoComplete="current-password"
          autoFocus
          required
          fullWidth
          variant="outlined"
          color={passwordError ? 'error' : 'primary'}
        />
      </FormControl>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <ForgotPassword open={open} handleClose={handleClose} />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={validateInputs}
        disabled={loading}
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </Button>
      <Link
        component="button"
        type="button"
        onClick={handleClickOpen}
        variant="body2"
        sx={{ alignSelf: 'center' }}
      >
        Forgot your password?
      </Link>
    </Box>
  );
}