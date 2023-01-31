import { Component } from 'react';
import { RecipeItem } from '../RecipeItem';
import { List } from './RecipeList.styled';

// const Statistics = ({ stats: { id, label, percentage } })
// // чи треба прописуваити id ящо в рендері не використовуємо. Тільки в propTypes.

// // Чому пробував інші імена властивостей
// const Statistics1 = ({ stats: { id, label, percentage } })
// // працює тільки з тими що в масиві об'єктів.

const SimpleCimponent = ({
  stats: { id: myId, label, percentage },
}) => {
  return <>{myId}</>;
};

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
            index={i} //передача індекса
            isActive={this.state.activeRecipeItem === i}
            activeStateHandler={() => {
              this.changeActiveItem(i);
            }}
          >
            <SimpleCimponent />
          </RecipeItem>
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
