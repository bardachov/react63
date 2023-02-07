import { Component } from 'react';
import { RecipeItem } from '../RecipeItem';
import { RecipeForm } from '../RecipeForm';
import { List } from './RecipeList.styled';
import { v4 as uuidv4 } from 'uuid';
export class RecipeList extends Component {
  state = {
    activeRecipeItem: null,
    list: [],
    isFormVisible: false,
    nameVal: '',
  };

  componentDidMount() {
    // console.log('did mount');
    this.setState({
      list: JSON.parse(localStorage.getItem('recipelist')),
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('did update');

    localStorage.setItem(
      'recipelist',
      JSON.stringify(this.state.list)
    );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  // console.log(nextState);
  // console.log(this.state);
  // console.log(this.state, nextState);
  // if (
  //   this.state.list.length !== nextState.list.length
  //   // this.state.list.length > 0
  // ) {
  //   return true;
  // }

  // return false;
  // }

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
        image:
          image.value ||
          'data:image/jpeg;base64,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',
        calories: calories.value || 100,
        servings: servings.value || 1,
        time: time.value || 60,
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
    console.log('rendered');
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
