import { Component } from 'react';
import { RecipeItem } from '../RecipeItem';
import { RecipeForm } from '../RecipeForm';
import { List } from './RecipeList.styled';
import { v4 as uuidv4 } from 'uuid';
export class RecipeList extends Component {
  state = {
    activeRecipeItem: null,
    list: this.props.recipeItems,
    isFormVisible: false,
    nameVal: '',
  };

  changeActiveItem = (index) => {
    this.setState(({ activeRecipeItem }) => {
      return {
        activeRecipeItem: activeRecipeItem === index ? null : index,
      };
    });
  };

  showFormHandler = (event) => {
    console.log(event.target);
    this.setState({
      isFormVisible: !this.state.isFormVisible,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();

    const { name, image, calories, servings, time, difficulty } =
      event.target.elements;

    this.setState(({ list }) => {
      const newRecipeItem = {
        id: uuidv4(),
        name: name.value,
        image: image.value,
        calories: calories.value,
        servings: servings.value,
        time: time.value,
        difficulty: difficulty.value,
      };

      return {
        list: [...list, newRecipeItem],
      };
    });
  };

  removeRecipeItem = (id) => {
    this.setState(({ list }) => {
      return {
        list: list.filter((item) => item.id !== id),
      };
    });
  };

  changeHandler = (event) => {
    console.log(event);
    this.setState({
      nameVal: event.target.value,
    });
  };

  render() {
    return (
      <>
        <button
          onClick={this.showFormHandler}
          style={{ marginTop: 20 }}
        >
          Toggle Recipe Form
        </button>

        {this.state.isFormVisible && (
          <RecipeForm
            onSubmitHandler={this.submitHandler}
            onChangeHandler={this.changeHandler}
            nameVal={this.state.nameVal}
          />
        )}

        <List>
          {this.state.list.map((item, i) => (
            <RecipeItem
              key={item.id}
              data={item}
              index={i} //передача індекса
              isActive={this.state.activeRecipeItem === i}
              activeStateHandler={() => {
                this.changeActiveItem(i);
              }}
              removeHandler={this.removeRecipeItem}
            />
          ))}
        </List>
      </>
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
