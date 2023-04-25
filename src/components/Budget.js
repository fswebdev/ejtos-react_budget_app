/*import React, { useContext} from 'react';
import {AppContext} from '../context/AppContext';
const Budget = () => {
    const {currency,budget,dispatch} = useContext(AppContext);

      function handleChange(e) {
        dispatch({ type: 'UPDATE_BUDGET_AVAILABLE', payload: e.target.value });
        //dispatch({type: 'CHG_CURRENCY', payload: e.target.value})
      }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input type="number" step="10" min="2000" max="20000" value={budget} onChange={handleChange}/></span>
        </div>
    );
};
export default Budget;*/

import React, { useContext, useEffect} from 'react';
import {AppContext} from '../context/AppContext';
const Budget = ({ min=2000, max=20000, step=10 }) => {
  const {budget,currency,dispatch} = useContext(AppContext);

  useEffect(() => {
    if (budget > max) {
      dispatch({ type: "SET_ERROR", payload: `Value cannot be greater than ${max}` });
      window.alert(`Value cannot be less than ${max}`);
    } else {
      dispatch({ type: "SET_ERROR", payload: "" });
    }
  }, [budget,dispatch,max,step]);

  function handleChange(e) {
      dispatch({ type: 'UPDATE_BUDGET_AVAILABLE', payload: e.target.value });
  };

  return (
    <div className='alert alert-secondary'><span>Budget: {currency}
    <input
      type="number"
      min={min}
      max={max}
      step={step}
      value={budget}
      onChange={handleChange}
    />
    </span>
    </div>
  );
}

export default Budget;