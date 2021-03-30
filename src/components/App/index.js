import React from 'react';
import InputItem from '../InputItem';
import ItemList from '../ItemList';
import Footer from '../Footer';
import './App.css';

const count = 3;

const items = [
  {
    value: 'Написать приложение'
  },
  {
    value: 'Прописать ключи'
  },
  {
    value: 'Сходить за хлебом'
  }
];

const App = () => (<div className='wrap'>
  <h1 className='wrap__title'>ToDo</h1>
  <InputItem className='wrap__input'/>
  <ItemList items={items} />
  <Footer count={count} />
</div>);

export default App;