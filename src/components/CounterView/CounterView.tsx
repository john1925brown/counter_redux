import { Button } from '../Button/Button';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { RootState } from '../../app/store';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { incValueAC, resetValueAC } from '../../model/counter_reducer';
import s from './CounterView.module.css';
import { useSelector } from 'react-redux';
import { changeErrorValueAC } from '../../model/error_reducer';
import { useEffect } from 'react';

export const CounterView = () => {
  const counterValue = useAppSelector(
    (state: RootState) => state.counter.value
  );
  const startValue = useAppSelector(
    (state: RootState) => state.counter.startValue
  );
  const maxValue = useAppSelector((state: RootState) => state.counter.maxValue);
  const error = useSelector((state: RootState) => state.error.error);
  console.log(error, '2');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (counterValue >= maxValue || startValue < 0) {
      dispatch(changeErrorValueAC({ error: true }));
    } else {
      dispatch(changeErrorValueAC({ error: false }));
    }
  }, [error, maxValue, counterValue, dispatch]);

  const incValue = () => {
    dispatch(incValueAC());
  };

  const resetValue = () => {
    dispatch(resetValueAC({ startValue: startValue }));
  };

  return (
    <div>
      <div className={error ? s.counter__value__error : s.counter__value}>
        {counterValue}
      </div>
      <div>
        <Button title="inc" buttonCallback={incValue} isDisabled={error} />
        <Button title="reset" buttonCallback={resetValue} />
      </div>
    </div>
  );
};
