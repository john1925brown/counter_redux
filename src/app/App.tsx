import { CounterConfig } from '../components/CounterConfig/CounterConfig';
import { CounterView } from '../components/CounterView/CounterView';
import './App.css';

export const App = () => {
  return (
    <div className='container'>
      <CounterConfig/>
      <CounterView />
    </div>
  );
};