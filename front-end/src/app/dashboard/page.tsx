'use client'

import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { USERNAME_COOKIE } from '@/types/auth.types';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get(USERNAME_COOKIE) === undefined) {
      router.push('/');
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}