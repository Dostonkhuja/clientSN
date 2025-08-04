import * as React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Container, Grid, Link, Typography, Paper } from '@mui/material';
import SignInForm from './SignInForm';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignIn = () => {
    const errorMessage = useSelector(state => state.signIn.errorMessage);
    const isAuth = useSelector(state => state.signIn.isAuth);

    if (isAuth) {
        return <Redirect to="/" />;
    }

    return (
        <Container component="main" maxWidth="lg" sx={{ mt: 8 }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">

                {/* Chap qism — Matn */}
                <Grid item xs={12} md={6}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            color: '#1976d2',
                            mb: 2,
                            textAlign: { xs: 'center', md: 'left' }
                        }}
                    >
                        The Beatles network
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            color: 'text.secondary',
                            textAlign: { xs: 'center', md: 'left' }
                        }}
                    >
                        Connect with your friends and share your thoughts.
                    </Typography>
                </Grid>

                {/* O‘ng qism — Forma */}
                <Grid item xs={12} md={5}>
                    <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <SignInForm errorMessage={errorMessage} />
                        </Box>
                    </Paper>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                        sx={{ mt: 4 }}
                    >
                        {'Copyright © '}
                        <Link color="inherit" href="/">
                            Doston Sheraliyev social-network app
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Grid>

            </Grid>
        </Container>
    );
};

export default React.memo(SignIn);
