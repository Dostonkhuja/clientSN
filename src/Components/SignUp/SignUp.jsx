import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { sendSIgnIn } from '../../State-management/SignInSlice';
import SignUpForm from './SignUpForm';

import {
    Avatar,
    Box,
    Container,
    CssBaseline,
    Typography,
    Paper,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignUp = React.memo(() => {
    const dispatch = useDispatch();

    const errorMessage = useSelector(state => state.signUp.errorMessage);
    const user = useSelector(state => state.signUp.user);
    const signInData = useSelector(state => state.signUp.signInData);
    const isAuth = useSelector(state => state.signIn.isAuth);

    useEffect(() => {
        if (!isAuth && user && signInData) {
            dispatch(sendSIgnIn(signInData));
        }
    }, [user]);

    if (isAuth) {
        return <Redirect to="/profile" />;
    }

    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />

            {/* Sayt nomi */}
            <Box sx={{ mt: 8, textAlign: 'center' }}>
                <Typography
                    variant="h4"
                    fontWeight={700}
                    sx={{
                        color: '#1976d2',
                        fontSize: { xs: '1.8rem', sm: '2.4rem' },
                        mb: 6, // nomdan keyin bo'sh joy
                    }}
                >
                    The Beatles network
                </Typography>
            </Box>

            {/* Forma konteyneri */}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="60vh"
                px={2}
                sx={{ mb: 10 }} // pastga bo'sh joy
            >
                <Paper
                    elevation={4}
                    sx={{
                        p: { xs: 3, sm: 4 },
                        width: '100%',
                        maxWidth: 400,
                        borderRadius: 2,
                    }}
                >
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                            Sign up
                        </Typography>

                        <SignUpForm errorMessage={errorMessage} />
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
});

export default SignUp;
