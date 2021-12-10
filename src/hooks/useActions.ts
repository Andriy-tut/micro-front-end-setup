import { ActionCreator } from 'redux';
import { useDispatch } from 'react-redux';


function useActions<R, T extends Record<keyof T, ActionCreator<R>>>(
    actionCreators: T
): Record<keyof T, ActionCreator<R>> {
    const dispatch = useDispatch();
    return Object.keys(actionCreators).reduce((result, name) => {
        result[name as keyof T] = (...args) => dispatch(actionCreators[name as keyof T](...args));
        return result;
    }, {} as Record<keyof T, ActionCreator<R>>);
}

export default useActions;
