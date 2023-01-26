import { RecipeItem } from "../RecipeItem";
import { List, Card } from "./RecipeList.styled";

export const RecipeList = ({ recipeItems }) => {
  return (
    <List>
      {/* <Card>юхуу</Card> */}
      {recipeItems.map(item => <RecipeItem key={item.id} data={item} />)}
    </List>
    
  )
}