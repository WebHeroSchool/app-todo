import React from 'react';
import InputItem from '../InputItem';
import ItemList from '../ItemList';
import Footer from '../Footer';

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

const App = () => (<div>
  <h1>ToDo</h1>
  <InputItem />
  <ItemList items={items} />
  <Footer count={count} />
</div>);

export default App;