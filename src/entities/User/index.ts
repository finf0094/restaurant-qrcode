import { userReducer, userActions } from './model/slice/userSlice';
import { getAuthUserData } from './model/selectors/getAuthUserData/getAuthUserData';
import type { UserSchema, User } from './model/types/user';
import type { UserRole } from './model/consts/userConsts';

export {
    userReducer, userActions, UserSchema, User, getAuthUserData, UserRole,
};
