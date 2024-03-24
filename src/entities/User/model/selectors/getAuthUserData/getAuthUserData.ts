import { StateSchema } from '@/app/providers/store';

export const getAuthUserData = (state: StateSchema) => state.user.authData;
