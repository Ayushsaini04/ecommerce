import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from '../features/counter';

function Counter() {
    const counter = useSelector((store) => store.counter.value);
    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleIncrement = () => {
        dispatch(increment());
    }

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <p>{counter}</p>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Counter;
