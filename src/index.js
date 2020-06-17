import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './routes/App';
import reducer from './reducers';



const initialState = {
  projects: [
    {
      "id": "1",
      "image":"https://s3-us-west-2.amazonaws.com/luisrodriguezgarcia-blog/2020/06/kod3rsstore.com_.png",
      "urlDemo": "https://kod3rsstore.com",
      "title": "kod3rsstore",
      "github": "https://github.com/kod3rsStore",
      "blogLink": "https://blog.luisrodriguezgarcia.com",
      "stars": "25",
      "forks": "20",
      "description": "Its an ecommerce site "
    },{
      "id": "2",
      "image":"https://s3-us-west-2.amazonaws.com/luisrodriguezgarcia-blog/2020/06/kod3rsstore.com_.png",
      "urlDemo": "https://kod3rsstore.com",
      "title": "kod3rsstore",
      "blogLink": "https://blog.luisrodriguezgarcia.com",
      "stars": "25",
      "description": "Its an ecommerce site "
    },{
      "id": "3",
      "image":"https://s3-us-west-2.amazonaws.com/luisrodriguezgarcia-blog/2020/06/kod3rsstore.com_.png",
      "urlDemo": "https://kod3rsstore.com",
      "title": "kod3rsstore",
      "github": "https://github.com/kod3rsStore",
      "forks": "20",
      "description": "Its an ecommerce site "
    },{
      "id": "4",
      "image":"https://s3-us-west-2.amazonaws.com/luisrodriguezgarcia-blog/2020/06/kod3rsstore.com_.png",
      "urlDemo": "https://kod3rsstore.com",
      "title": "kod3rsstore",
      "github": "https://github.com/kod3rsStore",
      "blogLink": "https://blog.luisrodriguezgarcia.com",
      "description": "Its an ecommerce site "
    },
  ]
};

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhacers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);