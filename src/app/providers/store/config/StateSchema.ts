import { EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

// entities
import type { UserSchema } from 'entities/User';

// features
import type { LoginSchema } from "feature/AuthByUsername";

export interface StateSchema {
    user: UserSchema

    // Асинхронные редюсеры
    loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: any) => StateSchema,
    add: (key: StateSchemaKey, reducer: Reducer) => void,
    remove: (key: StateSchemaKey) => void,
    // true - вмонтирован, false - демонтирован
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager?: ReducerManager
}
