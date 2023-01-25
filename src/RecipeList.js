import { RecipeItem } from "./RecipeItem"

export const RecipeList = ({ recipeItems }) => {
  return (
    <div style={{display: 'flex', gap: 16}}>
      {recipeItems.map(item => <RecipeItem key={item.id} data={item} />)}
    </div>
  )
}