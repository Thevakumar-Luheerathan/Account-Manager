import SignUp from "./SignUp";
import {Box, Tab, Tabs } from "@mui/material";

import Card from './shared-theme/CustomCard';
import SignIn from "./SignIn";
import React from "react";

export default function SignInSignUpCard() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Card variant="outlined">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Sign Up" />
                    <Tab label="Sign In" />
                </Tabs>
            </Box>
            {value === 0 ? <SignUp /> : <SignIn />}
        </Card>

    );
}