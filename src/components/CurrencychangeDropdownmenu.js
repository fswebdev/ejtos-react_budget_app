import React, { useContext} from 'react';
import {AppContext} from '../context/AppContext';

function CurrencychangeDropdownmenu() {
    const { currencyselection, dispatch } = useContext(AppContext);
  
    function handleCurrencyChange(e) {
      const changedCurrency = e.target.value;
  
      // Define new currency prefixes based on selected currency
      let currency;
  
      switch (changedCurrency) {
        case 'Dollar':
          currency = '$';
          break;
        case 'Pound':
          currency = '£';
          break;
        case 'Euro':
          currency = '€';
          break;
        case 'Rupee':
          currency = '₹';
          break;
        default:
          currency = '£';
      }
  
      dispatch({
        type: 'CHG_CURRENCY',
        payload: {
          currencyselection: changedCurrency,
          currency: currency
        }
      });
  
      // Update currency based on selected changed currency
      dispatch({
        type: 'CURRENCY_DEF',
        payload: {
          currency: currency
        }
      });
    }
  
    return (
      <div>
        <select className="custom-select selector" value={currencyselection} onFocus={(event)=> event.target.size=2} onBlur={(event) => event.target.size=0} onChange={handleCurrencyChange}>
        <option className="option" defaultValue>Currency (£ Pound)</option>
        <option className="option" value="Dollar" name="dollar">$ Dollar</option>
        <option className="option" value="Pound" name="pound">£ Pound</option>
        <option className="option" value="Euro" name="euro">€ E u r o</option>
        <option className="option" value="Rupee" name="rupee">₹ Rupee</option>
        </select>
      </div>
    );
  }

  export default CurrencychangeDropdownmenu;