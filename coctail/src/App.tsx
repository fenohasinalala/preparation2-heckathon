import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ListTable } from "./Table";
import {
  functionChangID,
  functionFermetur,
  functionFermeturPost,
  items,
  newCategory,
  newCoctail,
  newDrink,
} from "./donner";
import Loging from "./loging";
import ListCoctail from "./listCoctail";
import NavbarHeader from "./navBarHeader/NavbarHeader";
import { ListTableDrinks } from "./TableDrinks";
import { ListTableCategories } from "./TableCategories";
import axios from "axios";
import { categoryDrink, cocktail, drink } from "./interface";
import { Route, Routes } from "react-router-dom";
import FormulaireDrink from "./formulaireDrink";
import FormulaireCategory from "./formulaireCategory";
import { CompositionCoctail } from "./CompositionCoctail";
import NavbarHeaderVew from "./navBarHeaderVieu/NavbarHeaderVew";
import ListCoctailVew from "./listCoctailView";

function App() {
  const [activUpdat, setActivUpdat] = useState<boolean>(false);
  const [returnAll, setReturnAll] = useState<number>(0);
  const [idRequet, setItRequet] = useState<number|null>(null);
  const actualisationAllData = ()=>{
    setLoagDrink(loagDrink+1);
    setLoagCoctail(loagCoctail+1);
    setLoagCategories(loagDrink+1)
  }

  const returnAllValur = ()=>{
    setActivUpdat(false);
    setReturnAll(returnAll+1)
  }

  const PutPostDrink = (id:number|null,fermetur:()=>void,drink:drink | undefined)=>{
    return(<FormulaireDrink 
      drink={drink} 
      actualisationAllData={actualisationAllData} 
      returnAllValur={returnAllValur} 
      setActivUpdat={setActivUpdat}
      id={id}
      fermetur={()=>{fermetur()}}
      dataCompose={dataCategories}
      />)
  }


  const PutPostCategori = (id:number|null,fermetur:()=>void,category:categoryDrink | undefined)=>{
    return(<FormulaireCategory 
      category={category} 
      actualisationAllData={actualisationAllData} 
      returnAllValur={returnAllValur} 
      setActivUpdat={setActivUpdat}
      id={id}
      fermetur={()=>{fermetur()}}
      />)
  }


  const [dataDrink, setDataDrink] = useState<drink[]>([newDrink]);
  const [loagDrink, setLoagDrink] = useState<number>(0);
  useEffect(() => {
    axios({
      url: "https://virtserver.swaggerhub.com/fenohasinalala/preparation_hackathon/1.0.0/drinks",
    })
      .then((response) => {
        setDataDrink(response.data);
      })
      .catch((error) => {
        console.log("error in GET DRINKS :");
        console.log(error);
      });
  }, [loagDrink]);

  const [dataCocktail, setDataCocktail] = useState<cocktail[]>([newCoctail]);
  const [loagCoctail, setLoagCoctail] = useState<number>(0);
  useEffect(() => {
    axios({
      url: "https://virtserver.swaggerhub.com/fenohasinalala/preparation_hackathon/1.0.0/cocktails",
    })
      .then((response) => {
        setDataCocktail(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error in GET COCTAIL :");
        console.log(error);
      });
  }, [loagCoctail]);

  const [dataCategories, setDataCategories] = useState<categoryDrink[]>([
    newCategory,
  ]);
  const [loagCategories, setLoagCategories] = useState<number>(0);
  useEffect(() => {
    axios({
      url: "https://virtserver.swaggerhub.com/fenohasinalala/preparation_hackathon/1.0.0/categories",
    })
      .then((response) => {
        setDataCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error in GET COCTAIL :");
        console.log(error);
      });
  }, [loagCategories]);

  return (
    <div className="App">
      <Routes>
      <Route path="/loging" 
            element={
              <div>
                <body>
                  {Loging()}
                </body>
              </div>
            }
        />
        <Route path="/" 
            element={
              <div>
                <header>
                  <div className="onHead">{NavbarHeaderVew()}</div>
                </header>
                <body>
                  <div className="oneContener">{ListCoctailVew(dataCocktail)}</div>
                </body>
              </div>
            }
        />
        <Route
          path="/bar/cocktails"
          element={
            <div>
              <header>
                <div className="onHead">{NavbarHeader()}</div>
              </header>
              <body>
                <div className="oneContener">{ListCoctail(dataCocktail,setActivUpdat)}</div>
                <div className="oneContener">
                  {
                    activUpdat?<CompositionCoctail dataDrink={dataDrink} actualisationAllData={actualisationAllData} returnAllValur={returnAllValur} setActivUpdat={setActivUpdat} />:<></>
                  }
                </div>
                
              </body>
            </div>
          }
        />
        <Route
          path="/bar/drinks"
          element={
            <div>
              <header>
                <div className="onHead">{NavbarHeader()}</div>
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
                    actualisationAllData={actualisationAllData}
                    returnAllValur={returnAllValur} 
                    setActivUpdat={setActivUpdat}
                    PutPostDrink={PutPostDrink}

                  />
                  {activUpdat?<FormulaireDrink 
                  drink={undefined} 
                  actualisationAllData={actualisationAllData} 
                  returnAllValur={returnAllValur} 
                  setActivUpdat={setActivUpdat}
                  id={idRequet}
                  fermetur={()=>{returnAllValur()}}
                  dataCompose={dataCategories}
                  />:<></>}
                </div>
              </body>
            </div>
          }
        />
        <Route
          path="/bar/categories"
          element={
            <div>
              <header>
                <div className="onHead">{NavbarHeader()}</div>
              </header>
              <body>
                <div className="oneContener">
                  <ListTableCategories
                    items={dataCategories}
                    functionChangID={functionChangID}
                    functionFermetur={functionFermetur}
                    functionFermeturPost={functionFermeturPost}
                    setItems={setDataCategories}
                    setLoaling={setLoagCategories}
                    actualisationAllData={actualisationAllData}
                    returnAllValur={returnAllValur} 
                    setActivUpdat={setActivUpdat}
                    PutPostCategori={PutPostCategori}
                  />
                  {activUpdat?<FormulaireCategory 
                  category={undefined} 
                  actualisationAllData={actualisationAllData} 
                  returnAllValur={returnAllValur} 
                  setActivUpdat={setActivUpdat}
                  id={idRequet}
                  fermetur={()=>{returnAllValur()}}
                  />:<></>}
                </div>
              </body>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
