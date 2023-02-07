import {
  TextField,
  Select,
  Button,
  MenuItem,
  Typography,
} from '@mui/material';
import { Box, Stack } from '@mui/system';

export const RecipeForm = ({
  onSubmitHandler,
  onChangeHandler,
  nameVal,
}) => {
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
          onChange={onChangeHandler}
          value={nameVal}
          size="small"
          sx={{ mr: 3 }}
        />
        <TextField
          id="recipeImg"
          label="Image url"
          name="image"
          size="small"
        />
      </Box>
      <Stack direction="row" justifyContent="center">
        <TextField
          label="calories"
          name="calories"
          size="small"
          type="number"
          sx={{ width: 100, mr: 1 }}
        />

        <TextField
          label="servings"
          name="servings"
          size="small"
          type="number"
          sx={{ width: 100, mr: 1 }}
        />

        <TextField
          label="time"
          name="time"
          size="small"
          type="number"
          sx={{ width: 100, mr: 1 }}
        />

        <Select
          name="difficulty"
          label="difficulty"
          value={'easy'}
          size="small"
          sx={{ width: 150 }}
        >
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
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
