import { useEffect, useState } from 'react';

import {
  TextField,
  Select,
  Button,
  MenuItem,
  Typography,
  TextareaAutosize,
} from '@mui/material';

import { Box, Stack } from '@mui/system';

const useForm = (prop) => {
  const [propName, setPropName] = useState();

  const changeHandler = (e) => {
    setPropName(e.target.value);
    localStorage.setItem(prop, e.target.value);
  };

  useEffect(() => {
    const value = localStorage.getItem(prop);
    if (value) setPropName(value);
  }, []);

  return [propName, changeHandler];
};

export const RecipeForm = ({ onSubmitHandler }) => {
  const [name, nameChangeHandler] = useForm('name');
  const [imgUrl, imgUrlChangeHandler] = useForm('imgUrl');
  const [description, descriptionChangeHandler] =
    useForm('description');
  const [calories, caloriesChangeHandler] = useForm('calories');
  const [servings, servingsChangeHandler] = useForm('servings');
  const [time, timeChangeHandler] = useForm('time');

  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log(event.code);
    };

    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  // кожного разу коли міняється name
  useEffect(() => {
    setCounter(1);
    setCounter1(1);
  }, []);

  useEffect(() => {
    console.log('counter has changed', counter);
  }, [counter]);

  useEffect(() => {
    console.log('counter1 has changed', counter1);
  }, [counter1]);

  // кожного разу коли міняється стейт і пропс
  useEffect(() => {
    console.log('Hey, I am here');
  });

  return (
    <form onSubmit={onSubmitHandler}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Add Recipe
      </Typography>

      <Box sx={{ mb: 2 }}>
        <TextField
          id="recipeName"
          label="Recipe Name"
          name="name"
          onChange={nameChangeHandler}
          value={name}
          size="small"
          sx={{ mr: 3 }}
        />
        <TextField
          id="recipeImg"
          label="Image url"
          name="image"
          size="small"
          onChange={imgUrlChangeHandler}
          value={imgUrl}
        />
      </Box>
      <Stack direction="row" justifyContent="center">
        <TextField
          label="calories"
          name="calories"
          size="small"
          type="number"
          onChange={caloriesChangeHandler}
          value={calories}
          sx={{ width: 100, mr: 1 }}
        />

        <TextField
          label="servings"
          name="servings"
          size="small"
          type="number"
          onChange={servingsChangeHandler}
          value={servings}
          sx={{ width: 100, mr: 1 }}
        />

        <TextField
          label="time"
          name="time"
          size="small"
          type="number"
          onChange={timeChangeHandler}
          value={time}
          sx={{ width: 100, mr: 1 }}
        />
        <TextareaAutosize
          name="description"
          onChange={descriptionChangeHandler}
          value={description}
        />
        {/* <Select
          name="difficulty"
          label="difficulty"
          value={'easy'}
          size="small"
          sx={{ width: 150 }}
        >
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select> */}
      </Stack>
      <Button
        sx={{ mt: 5 }}
        size="large"
        variant="contained"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default function Hi() {
  console.log('hi');
}
