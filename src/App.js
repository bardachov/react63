import { Button, TextField } from '@mui/material';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import { RecipeList } from './RecipeList';
import StopWatch from './StopWatch';
import recipes from './recipes.json';

function App() {
  const [name, setName] = useState('John');
  const [surname, setSurname] = useState('Perk');
  
  const PersonRef = useRef('Artem');

  const fullName = useMemo(() => {
    console.log('usememo invoked')
    return `${name} ${surname}`
  }, [name]);

  const clickHandler = useCallback((e) => {
    console.log('Client changed his surname')
    setName(Date.now() + surname);
  }, [surname]);

  useEffect(() => {
    console.log(PersonRef);
    
    // setInterval(() => {
      
    //   PersonRef.current = Date.now() + surname;
    //   console.log(PersonRef);
    // }, 500)

  });


  const countRef = useRef(0);
  // let count = 0;

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };
  console.log('I rendered!');

  return (
    <div className="App">
      <StopWatch />
      {/* <button onClick={handle}>Click me</button>;
      <b>RefName: {PersonRef.current}</b>
      <p>
        {name}, {surname}
      </p>
      <p>Fullname: {fullName}</p>
      <TextField
        onChange={(e) => {
          setSurname(e.target.value);
        }}
      />
      <Button onClick={clickHandler}>changeName</Button>
      <RecipeList recipeItems={recipes} /> */}
    </div>
  );
}

export default App;
