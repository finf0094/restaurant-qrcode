import { useCallback } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { StateSchema } from 'app/providers/store';

export const useSelector: TypedUseSelectorHook<StateSchema> = useReduxSelector;

function useReduxField<T>(
    selector: (state: StateSchema) => T,
    actionCreator: ActionCreatorWithPayload<T, string>,
): [T, (newValue: T) => void] {
    const dispatch = useAppDispatch();
    const value = useSelector(selector);

    const setValue = useCallback(
        (newValue: T) => {
            dispatch(actionCreator(newValue));
        },
        [dispatch, actionCreator],
    );

    return [value, setValue];
}

export default useReduxField;
