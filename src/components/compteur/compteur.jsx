import { useState } from "react";
import PropTypes from 'prop-types';

const INITIAL_COUNT = 0;

const Compteur = (props) => {
    const {incr} = props;
    const [count, setCount] = useState(INITIAL_COUNT);

    const handleReset = () => {
        setCount(INITIAL_COUNT);
    }

    const handleIncr = () => {
        setCount(oldCount => oldCount + incr);
    }

    return (
        <div>
            <h1>Compteur: {count}</h1>
            <button onClick={handleIncr}>+{incr}</button>
            {(count !== INITIAL_COUNT) && (
                <button onClick={handleReset}>Reset</button>
            )}
        </div>
    );
}

Compteur.defaultProps = {
    incr: 1
}

Compteur.propTypes = {
    incr: PropTypes.number
}

export default Compteur;