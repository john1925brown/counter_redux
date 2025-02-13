import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { Button } from '../Button/Button';
import s from './counterConfig.module.css';
import { ChangeEvent, useEffect } from 'react';
import {
  changeMaxValueAC,
  changeStartValueAC,
  incValueAC,
} from '../../model/counter_reducer';

export const CounterConfig = () => {
  const startValue = useAppSelector((state) => state.counter.startValue);
  const maxValue = useAppSelector((state) => state.counter.maxValue);
  const counterValue = useAppSelector((state) => state.counter.value);
  const error = useAppSelector((state) => state.error.error);
  // Получил для динамичного изменения value при увеличении startValue
  console.log(error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (startValue > counterValue) {
      dispatch(incValueAC());
    }
  }, [startValue]);

  const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMaxValueAC({ maxValue: +e.currentTarget.value }));
  };

  const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStartValueAC({ startValue: +e.currentTarget.value }));
  };

  return (
    <div>
      <div className={s.configGroup}>
        <div className={s.inputGroup}>
          <p className={s.input__desc}>max value:</p>
          <input
            className={s.input}
            type="number"
            onChange={changeMaxValueHandler}
            value={maxValue}
          />
        </div>
        <div className={s.inputGroup}>
          <p className={s.input__desc}>start value:</p>
          <input
            className={s.input}
            type="number"
            onChange={changeStartValueHandler}
            value={startValue}
          />
        </div>
      </div>
      <div className={s.btn__container}>
        <Button title="set" buttonCallback={() => {}} isDisabled={error} />
      </div>
    </div>
  );
};