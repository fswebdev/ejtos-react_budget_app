import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import {AppContext} from '../context/AppContext';
import Plus from '../images/plus.ico';
import Minus from '../images/minus.ico';
import '../index.css';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} className='button'><img src={Plus} className="size" alt="Plus sign"/></button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} className='button'><img src={Minus} className="size" alt="Minus sign"/></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
