import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ListTable } from './Table';
import { functionChangID, functionFermetur, functionFermeturPost, items } from './donner';
import Loging from './loging';
import ListCoctail from './listCoctail';
import CompositionCoctail from './CompositionCoctail';
import NavbarHeader from './navBarHeader/NavbarHeader';

function App() {
  return (
    <div className="App">
      <header>
        <div className="onHead">
          {NavbarHeader()}
        </div>
      </header>
      <body>
        <div className="oneContener">
          <ListTable items={items} functionChangID={functionChangID} functionFermetur={functionFermetur} functionFermeturPost={functionFermeturPost}/>
        </div>
        <div className="oneContener">
          {Loging()}
        </div>
        <div className="oneContener">
          {ListCoctail()}
        </div>
        <div className="oneContener">
          {CompositionCoctail()}
        </div>
      </body>
    </div>
  );
}

export default App;

