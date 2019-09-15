import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  state = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  function omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }
  
    handleDeleteItem(cardIds) {
      console.log("handle delete item called", {cardIds}) 
      
    }
  
  handleAddItem(){
    console.log('handle add item called')
  }
  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDeleteItem={this.handleDeleteItem}
              onAddItem={this.handleAddItem}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
