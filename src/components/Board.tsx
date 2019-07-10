import React from 'react';
import Square from './Square';
import {SquareValueType} from '../react-app-env';

interface IProps {
  squares: Array<SquareValueType>
  onPress: Function
}

const Board: React.FC<IProps> = ({squares, onPress}) => {
  const renderSquare = (i: number) => (
    <Square
      value={squares[i]}
      onPress={() => onPress(i)}
    />
  );
  
  return (
    <div>
      <div style={styles.row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div style={styles.row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div style={styles.row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
};

export default Board;

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row' as 'row',
  }
};
