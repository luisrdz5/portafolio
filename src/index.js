import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './routes/App';
import reducer from './reducers';



const initialState = {
  skills: [
    {
      "id": "1",
      "image":"https://luisrodriguezgarcia-blog.s3-us-west-2.amazonaws.com/portafolio+images/node.png",
      "description": "Node JS",
    },{
      "id": "2",
      "image":"https://luisrodriguezgarcia-blog.s3-us-west-2.amazonaws.com/portafolio+images/javascript.png",
      "description": "Javascript",
    },{
      "id": "3",
      "image":"https://luisrodriguezgarcia-blog.s3-us-west-2.amazonaws.com/portafolio+images/jwt.png",
      "description": "JWT",
    },{
      "id": "4",
      "image":"https://luisrodriguezgarcia-blog.s3-us-west-2.amazonaws.com/portafolio+images/database.png",
      "description": "Databases",
    },{
      "id": "5",
      "image":"https://luisrodriguezgarcia-blog.s3-us-west-2.amazonaws.com/portafolio+images/cyber-security.png",
      "description": "Cyber security",
    },{
      "id": "6",
      "image":"https://luisrodriguezgarcia-blog.s3-us-west-2.amazonaws.com/portafolio+images/cicd.png",
      "description": "CI / CD",
    },{
      "id": "7",
      "image":"https://luisrodriguezgarcia-blog.s3-us-west-2.amazonaws.com/portafolio+images/docker.png",
      "description": "Docker",
    },{
      "id": "8",
      "image":"https://luisrodriguezgarcia-blog.s3-us-west-2.amazonaws.com/portafolio+images/linux.png",
      "description": "Linux",
    },{
      "id": "9",
      "image":"https://luisrodriguezgarcia-blog.s3-us-west-2.amazonaws.com/portafolio+images/firewall.png",
      "description": "Firewalls",
    },{
      "id": "10",
      "image":"https://luisrodriguezgarcia-blog.s3-us-west-2.amazonaws.com/portafolio+images/test.png",
      "description": "Testing",
    }
  ],
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
  ],
  social: [
    {
      "id": 1,
      "name": "Github",
      "link": "https://github.com/luisrdz5",
      "icon": "https://luisrodriguezgarcia-blog.s3-us-west-2.amazonaws.com/portafolio+images/github.svg"
    },
    {
      "id": 2,
      "name": "Twitter",
      "link": "https://twitter.com/luis_rdz5",
      "icon": "https://luisrodriguezgarcia-blog.s3-us-west-2.amazonaws.com/portafolio+images/twitter.svg"
    },
    {
      "id": 3,
      "name": "LinkedIn",
      "link": "https://www.linkedin.com/in/luisrdz5",
      "icon": "https://luisrodriguezgarcia-blog.s3-us-west-2.amazonaws.com/portafolio+images/linkedin.svg"
    }
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