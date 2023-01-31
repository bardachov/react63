import PropTypes from 'prop-types';
import { Component } from 'react';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';

import {
  Card,
  CardTitle,
  CardImage,
  CardSpecs,
  SpecsItem,
  BadgeList,
  Badge,
  BadgeListLabel,
} from './RecipeItem.styled';

export class RecipeItem extends Component {
  render() {
    const { name, image, servings, calories, time, difficulty } =
      this.props.data;

    return (
      <Card>
        <CardTitle>{name}</CardTitle>
        <CardImage
          src={image}
          alt={name}
          onClick={this.props.activeStateHandler}
        />
        <CardSpecs>
          <SpecsItem>
            <HiOutlineChartPie />
            {servings}servings
          </SpecsItem>

          <SpecsItem>
            <HiOutlineChartBar />
            {calories} calories
          </SpecsItem>

          <SpecsItem>
            <BsAlarm />
            {time} mins
          </SpecsItem>
        </CardSpecs>

        {this.props.isActive && (
          <div>
            <BadgeList>
              <BadgeListLabel>Difficulty</BadgeListLabel>
              <Badge value="easy" isActive={difficulty === 'easy'}>
                Easy
              </Badge>
              <Badge
                value="medium"
                isActive={difficulty === 'medium'}
              >
                Medium
              </Badge>
              <Badge value="hard" isActive={difficulty === 'hard'}>
                Hard
              </Badge>
            </BadgeList>
          </div>
        )}
      </Card>
    );
  }
}

RecipeItem.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }).isRequired,
};
