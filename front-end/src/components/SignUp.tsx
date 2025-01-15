'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Box, FormControl, FormLabel, Alert } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';


const Signup = () => {
  const { signup, loading, error, success } = useAuth();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    await signup({
      username: formData.get('username') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string
    });
  };

  return (
    // <Card variant="outlined">
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <FormControl>
        <FormLabel htmlFor="username">Username</FormLabel>
        <TextField
          id="username"
          type="text"
          name="username"
          placeholder="username"
          variant="outlined"
          required
          fullWidth
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          variant="outlined"
          required
          fullWidth
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <TextField
          name="password"
          placeholder="••••••"
          type="password"
          id="password"
          autoFocus
          required
          fullWidth
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="confirm_password">Confirm Password</FormLabel>
        <TextField
          name="confirm_password"
          placeholder="••••••"
          type="password"
          id="confirm_password"
          autoFocus
          required
          fullWidth
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </FormControl>
      <Button type="submit" disabled={loading} variant="contained" color="primary" fullWidth>
        {loading ? 'Signing up...' : 'Sign Up'}
      </Button>
    </Box>

  );
};

export default Signup;