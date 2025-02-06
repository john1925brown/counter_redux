import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { Button } from '../Button/Button';
import s from './counterConfig.module.css';
import { ChangeEvent } from 'react';
import {
  changeMaxValueAC,
  changeStartValueAC,
} from '../../model/config_reducer';

export const CounterConfig = () => {
  const startValue = useAppSelector((state) => state.config.startValue);
  const maxValue = useAppSelector((state) => state.config.maxValue);

  const dispatch = useDispatch();

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
        <Button title="set" buttonCallback={() => {}} />
      </div>
    </div>
  );
};
