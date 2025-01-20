'use client'

import { CssBaseline } from "@mui/material";

import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { USERNAME_COOKIE } from '@/types/auth.types';
import AppTheme from "../../components/shared-theme/AppTheme";
import CustomStack from "../../components/shared-theme/CustomStack";
import React from "react";
import Dashboard from "../../components/Dashboard";
import ColorModeIconDropdown from "../../components/shared-theme/ColorModeIconDropdown";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    if (Cookies.get(USERNAME_COOKIE) === undefined) {
      router.push('/');
    }
  }, []);

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <ColorModeIconDropdown sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <CustomStack direction="column" justifyContent="space-between">
        <Dashboard />
      </CustomStack>
    </AppTheme>
  );
}