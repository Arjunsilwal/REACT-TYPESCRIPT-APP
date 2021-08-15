import React, {useState} from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface Istate {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<Istate["people"]>([
    {
      name:"Messi",
      url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g",
      age:36,
      note:"Best footballer of the world"
    }
  ])

  return (
    <div className="App">
      <h1>People visited my website</h1>
      <List people={people}></List>
      <AddToList people ={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
