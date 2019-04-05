import React, { Component } from "react";
import axios from "axios";
//import CoinsForm from "./coins";

class App extends Component {

    constructor (props)
    {
        super(props);
        this.items = [];
        this.state = {
            suggestions: [],
        }
    }
    
    componentDidMount(){
        axios.get('https://api.coinmarketcap.com/v1/ticker/').then((res) => {
          console.log(res.data);
          this.items = res.data
        })
        .catch(error=>{    
        });
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({suggestions}));
    }

    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li>{item}</li>)}
            </ul>
        )
    }
    
      render() {
        return (
          <form>
            <input onChange={this.onTextChanged} type="text"/>
            {this.renderSuggestions()}
          </form>
        )
      }

}
export default App;