import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ListTable } from './Table';
import { functionChangID, functionFermetur, functionFermeturPost, items, newCategory, newCoctail, newDrink } from './donner';
import Loging from './loging';
import ListCoctail from './listCoctail';
import CompositionCoctail from './CompositionCoctail';
import NavbarHeader from './navBarHeader/NavbarHeader';
import { ListTableDrinks } from './TableDrinks';
import { ListTableCategories } from './TableCategories';
import axios from 'axios';
import { categoryDrink, cocktail, drink } from './interface';

function App() {

  const [dataDrink,setDataDrink] = useState<drink[]>([newDrink]);
  const [loagDrink,setLoagDrink] = useState<number>(0);
  useEffect(() => {
    axios({
      url: "https://virtserver.swaggerhub.com/fenohasinalala/preparation_hackathon/1.0.0/drinks"
    })
      .then(response => {
        setDataDrink(response.data);
      })
      .catch(error => {
        console.log("error in GET DRINKS :");
        console.log(error);
      });
  }, [loagDrink]);

  const [dataCocktail,setDataCocktail] = useState<cocktail[]>([newCoctail])
  const [loagCoctail,setLoagCoctail] = useState<number>(0)
  useEffect(() => {
      axios({
        url: "https://virtserver.swaggerhub.com/fenohasinalala/preparation_hackathon/1.0.0/cocktails"
      })
        .then(response => {
          setDataCocktail(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log("error in GET COCTAIL :");
          console.log(error);
        });
    }, [loagCoctail]);

    const [dataCategories,setDataCategories] = useState<categoryDrink[]>([newCategory])
    const [loagCategories,setLoagCategories] = useState<number>(0)
    useEffect(() => {
        axios({
          url: "https://virtserver.swaggerhub.com/fenohasinalala/preparation_hackathon/1.0.0/categories"
        })
          .then(response => {
            setDataCategories(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.log("error in GET COCTAIL :");
            console.log(error);
          });
      }, [loagCategories]);



  
  return (
    <div className="App">
      <header>
        <div className="onHead">
          {NavbarHeader()}
        </div>
      </header>
      <body>
        <div className="oneContener">
          <ListTableDrinks 
            items={dataDrink} 
            functionChangID={functionChangID} 
            functionFermetur={functionFermetur} 
            functionFermeturPost={functionFermeturPost} 
            setItems={setDataDrink}
            setLoaling={setLoagDrink}
          />
        </div>
        <div className="oneContener">
          <ListTableCategories 
            items={dataCategories} 
            functionChangID={functionChangID} 
            functionFermetur={functionFermetur} 
            functionFermeturPost={functionFermeturPost} 
            setItems={setDataCategories}
            setLoaling={setLoagCategories}
          />
        </div>
        <div className="oneContener">
          {Loging()}
        </div>
        <div className="oneContener">
          {ListCoctail(dataCocktail)}
        </div>
        <div className="oneContener">
          {CompositionCoctail(dataDrink)}
        </div>
      </body>
    </div>
  );
}

export default App;

