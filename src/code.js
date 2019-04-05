import React, { Component } from "react";
import axios from "axios";
//import CoinsForm from "./coins";
import Contact from "./components/contact";

class App extends Component {

    constructor (props)
    {
        super();
        this.contacts = [];
        this.state = {
            search : 'Level'
        }
    }

    
    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)});
    }

   
    componentDidMount(){
        axios.get('https://api.coinmarketcap.com/v1/ticker/').then((res) => {
          console.log(res.data);
          this.contacts = res.data
        })
        .catch(error=>{    
        });
    }
    
      render() {
        let filteredContacts = this.props.contacts.filter( (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
          <div>
              <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
              <ul>
                  {filteredContacts.map((contact)=> {
                      return <Contact contact={contact} key={contact.id}/>
                  })}
              </ul>              
          </div>
        )
      }

}
export default App;