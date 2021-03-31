import React from 'react';
import InputItem from '../InputItem';
import ItemList from '../ItemList';
import Footer from '../Footer';
import styles from './App.module.css';

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

const App = () => (<div className={styles.wrap}>
  <h1 className={styles.title}>ToDo</h1>
  <InputItem className={styles.input}/>
  <ItemList items={items} />
  <Footer count={count} />
</div>);

export default App;