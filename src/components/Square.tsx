import React from 'react';
import {SquareValueType} from '../react-app-env';

interface IProps {
  value: SquareValueType
  onPress: Function
}

const Square: React.FC<IProps> = ({value, onPress}) => {
  const onClick = () => onPress();

  return (
      <div onClick={onClick} style={styles.squareContainer}>
        <span style={styles.squareText}>{value}</span>
      </div>
  )
};

export default Square;

const styles = {
  squareContainer: {
    display: 'flex',
    flex: 1,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  squareText: {
    fontSize: 50
  },
};
