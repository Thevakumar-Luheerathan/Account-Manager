'use client'

import { CssBaseline } from "@mui/material";

import AppTheme from "../components/shared-theme/AppTheme";
import CustomStack from "../components/shared-theme/CustomStack";
import React from "react";
import SignInSignUpCard from "../components/SignInOrSignUpCard";
import ColorModeIconDropdown from "../components/shared-theme/ColorModeIconDropdown";

export default function Home() {

  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <ColorModeIconDropdown sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <CustomStack direction="column" justifyContent="space-between">
        <SignInSignUpCard />
      </CustomStack>
    </AppTheme>
  );
}


