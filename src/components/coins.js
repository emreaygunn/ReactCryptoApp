import React from 'react';

const CoinsForm = (props) => {
    return(
        <form onSubmit={props.getCoins}>
            <input type="text" name="coinsSymbol" placeholder="Symbol Giriniz.."/>
            <button>Submit</button>
        </form>
    )
}

export default CoinsForm;