import React from 'react';
import Item from '../Item';

const ItemList = ({ todoItem }) => (<ul>
  <li><Item todoItem={todoItem} /></li>
  <li><Item todoItem={'Оформить приложение'} /></li>
  <li><Item todoItem={'Сходить за хлебом'} /></li>
</ul>);

export default ItemList;