import { Component } from 'react';
import { RecipeItem } from '../RecipeItem';
import { List } from './RecipeList.styled';

export class RecipeList extends Component {
  state = {
    activeRecipeItem: null,
  };

  changeActiveItem = (index) => {
    this.setState(({ activeRecipeItem }) => {
      return {
        activeRecipeItem: activeRecipeItem === index ? null : index,
      };
    });
  };

  render() {
    return (
      <List>
        {this.props.recipeItems.map((item, i) => (
          <RecipeItem
            key={item.id}
            data={item}
            isActive={this.state.activeRecipeItem === i}
            activeStateHandler={() => {
              this.changeActiveItem(i);
            }}
          />
        ))}
      </List>
    );
  }
}

// export const RecipeList = ({ recipeItems }) => {
// return (
//   <List>
//     {recipeItems.map((item) => (
//       <RecipeItem key={item.id} data={item} />
//     ))}
//   </List>
// );
// };
