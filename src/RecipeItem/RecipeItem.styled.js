import styled from 'styled-components';

export const Card = styled.article`
  width: 320px;
  padding: 0px 10px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const CardSpecs = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SpecsItem = styled.span`
  padding: 15px 0px;  
  font-size: 16px;
  display: flex;
  align-items: center;
  

  svg {
    color: orangered;
    margin-right: 4px;
  }
`;

export const BadgeList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 5px;
`

export const BadgeListLabel = styled.b`
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
`

export const Badge = styled.span`
  border-radius: 4px;
  padding: 8px 16px;
  background-color: ${({isActive, value}) => {
    
    if (isActive) {
      
      switch(value) {
        case 'easy': return 'green';
        case 'medium': return 'blue';
        case 'hard': return 'red';
        default: return 'lightgray'
      }
    } else {
      return 'lightgray'
    }
    
    // switch(value) {
    //   case 'easy': {
    //     return isActive ? 'green' : 'lightgray';
    //   }

    //   case 'medium': {
    //     return isActive ? 'blue' : 'lightgray';
    //   }

    //   case 'hard': {
    //     return isActive ? 'red' : 'lightgray';
    //   }

    //   default: {
    //     return 'lightgray'
    //   }
    // }
  }};

  color: ${({isActive}) => isActive ? 'white' : 'black'}

`