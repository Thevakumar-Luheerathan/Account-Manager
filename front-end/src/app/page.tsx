'use client'

import { CssBaseline } from "@mui/material";

import AppTheme from "../components/shared-theme/AppTheme";
// import ColorModeSelect from "../../temp-components/shared-theme/ColorModeSelect";
import CustomStack from "../components/shared-theme/CustomStack";
import React from "react";
import SignInSignUpCard from "../components/SignInOrSignUpCard";
// import Dashboard from "./components/Dashboard";
import ColorModeIconDropdown from "../components/shared-theme/ColorModeIconDropdown";
// import Header from "../../temp-components/components/Header";

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


