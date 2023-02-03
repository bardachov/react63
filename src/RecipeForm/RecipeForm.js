export const RecipeForm = ({
  onSubmitHandler,
  onChangeHandler,
  nameVal,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <fieldset>
        <label htmlFor="recipeName">Назва страви</label>
        <input
          type="text"
          id="recipeName"
          name="name"
          onChange={onChangeHandler}
          value={nameVal}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="recipeImg">Фото страви(url)</label>
        <input type="text" id="recipeImg" name="image" />
      </fieldset>

      <fieldset>
        <input type="number" name="calories" placeholder="calories" />
        <input type="number" name="servings" placeholder="servings" />
        <input type="number" name="time" placeholder="minutes" />
      </fieldset>

      <select name="difficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button>Submit</button>
    </form>
  );
};
