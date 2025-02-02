import styled from 'styled-components';
import { Button } from '../Button/Button';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { RootState } from '../../app/store';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { incValueAC, resetValueAC } from '../../model/counter_reducer';

export const CounterView = () => {
  const counterValue = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();

  console.log(counterValue);

  const incValue = () => {
    dispatch(incValueAC());
  };

  const resetValue = () => {
    dispatch(resetValueAC());
  };

  return (
    <CounterViewStyled>
      <CounterDisplay>{counterValue}</CounterDisplay>
      <div>
        <Button title="inc" buttonCallback={incValue} />
        <Button title="reset" buttonCallback={resetValue} />
      </div>
    </CounterViewStyled>
  );
};

const CounterViewStyled = styled.div``;

const CounterDisplay = styled.div``;
