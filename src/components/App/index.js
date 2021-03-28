import React from 'react';
import InputItem from '../InputItem';
import ItemList from '../ItemList';
import Footer from '../Footer';

const count = 3;
const todoItem = 'Написать приложение';

const App = () => (<div>
  <h1>ToDo</h1>
  <InputItem />
  <ItemList todoItem={todoItem} />
  <Footer count={count} />
</div>);

export default App;