import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => import('./LoginForm'));

export default LoginFormAsync;
