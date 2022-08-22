import axios from 'axios';
import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { newCoctail } from '../donner';
import { cocktail } from '../interface';
import "./style.css";

function ListCoctail(dataCocktail:cocktail[],setActivUpdat:React.Dispatch<React.SetStateAction<boolean>>) {




  const ff= dataCocktail;

  return (
    <div className="conteneuAllCoctail">
      <h2 className='titleCoctail'> LIST DES COCKTAILS</h2>

      <button  className="btn btn-secondary btn-lg" onClick={()=>{setActivUpdat(true)}}>Créer un nouveau cocktail</button>

      <ListGroup variant="flush" className='conteneuCoctail'>
        {dataCocktail==[]?<></>:
          (
            dataCocktail.map((donne)=>{return(
              <ListGroup.Item className='notBotList'>
                <div className="d-flex justify-content-between grandre">
                  <div>
                    {donne.nameCocktail}
                  </div>
                  <div className='point'>
                    1
                  </div>
                  <div>
                    {""+donne.priceCocktail+" Ar"}
                  </div>
                  <button className="btn btn-outline-danger separt">Suprimer</button>
                  <button className="btn btn-outline-success separt">Modifier</button>
                </div>
                <div className="d-flex justify-content-start">
                  {
                    donne.compose.map((don,key)=>{
                      if (key==0) {
                      return(
                        <>
                          <div className="composCoctail">{don.nameDrink}</div>
                        </>
                      )
                      }else{
                        return(
                          <>
                            <div className="separateur"> | </div>
                            <div className="composCoctail">{don.nameDrink}</div>
                          </>
                        )
                      }
                    })
                  }
                </div>
              </ListGroup.Item>
            )})
          )
        }
      </ListGroup>
    </div>
  );
}

export default ListCoctail;