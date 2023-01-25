import './App.css';
import { RecipeList } from './RecipeList';
import recipes from './recipes.json';

function App() {
  return (
    <div className="App">
      <RecipeList recipeItems={recipes} />
    </div>
  );
}

export default App;
