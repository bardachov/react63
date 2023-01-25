import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';

export const RecipeItem = ({
  data: {name, image, time, servings, calories, difficulty}
}) => {
  return <div>
    <p>
      {name}
    </p>
    <img src={image} alt={name} width="200"/>
    <p>
      <HiOutlineChartPie />
      {servings}
      servings
    </p>
    <p>
      <HiOutlineChartBar/>
      {calories} calories
    </p>
    <p>
      <BsAlarm />
      {time} mins
    </p>

    <p>
      Difficulty: {difficulty}
    </p>
  </div>
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
}
