import React from 'react';
import Button from './components/button';
import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import SInput from './components/input';
import Select from './components/Select';
import Table from './components/table';

function App() {
  const [clicks, setClicks] = useState("");
  const [text, setText] = useState("type here...")
  const [selected,setSelect]=useState("")



  function click_anas() {
    setClicks("anas");
  }
  function click_khan() {
    setClicks("Khan")
  }

  let arr = [
    {
      id: 1,
      userName: "Anas",
      age: 18,
      institute: "NED",
      isActive: true,
      category: "student",
    },
    {
      id: 2,
      userName: "Ali",
      age: 20,
      institute: "JP",
      isActive: false,
      category: "student",
    },
  ];
  
  function change1(value:string) {
        setText(value)
  }
  function change2(val: string) {
    setSelect(val);
  }



  const options = [
     { value: "Apple" },
     { value: "Mango" },
     { value: "Banana"},
  ];
  
  const data = [
    {
  "id": 28,
  "Title": "Sweden"
    },
    {
  "id": 56,
  "Title": "USA"
    },
    {
  "id": 89,
  "Title": "England"
    }
  ]
  



  return (
    
    <div className="App">
      <div className='Buttons'>
        <h1>BUTTONS</h1>
      <Button label1="Click " Click={click_anas} />
      <Button label1="Last Name" Click={click_khan} />
        <p>{clicks}</p>
      </div>
      <div className='Cards'>
        <h1>CARDS</h1>
          <Card data={arr} />
      </div>
      <div className='Input'>
        <h1>INPUT</h1>
        <SInput value={text} change={change1} />
        <p>{ text}</p>
      </div>
       <div className='Select'>
        <h1>Select</h1>
        <Select label={"Select Option"} value={selected} optionList={ options} onChange={change2} />
        <p>You Selected: { selected}</p>
      </div>

      <div className='Table'>
        <h1>Table</h1>
        <Table data={data} col={[
          {
            heading: "ID",
            key:"id"
          },
          {
            heading: "Title",
            key:"Title"
          }
        ] } />
      </div>

    </div>
  );
}

export default App;
