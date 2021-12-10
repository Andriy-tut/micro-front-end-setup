import { ActionCreator } from 'redux';
import { useDispatch } from 'react-redux';

function useAction<R>(actionCreator: ActionCreator<R>): ActionCreator<R> {
    const dispatch = useDispatch();
    return (...args) => dispatch(actionCreator(...args));
}

export default useAction;
