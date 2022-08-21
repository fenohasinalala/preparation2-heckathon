import axios from 'axios';
import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { newCoctail } from '../donner';
import { cocktail } from '../interface';
import "./style.css";

function ListCoctail() {

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


  const ff= dataCocktail;

  return (
    <div className="conteneuAllCoctail">
      <h2 className='titleCoctail'> LIST DES COCKTAILS</h2>
      <ListGroup variant="flush" className='conteneuCoctail'>
        {dataCocktail==[]?<></>:
          (
            dataCocktail.map((donne)=>{return(
              <ListGroup.Item className='notBotList'>
                <div className="d-flex justify-content-between">
                  <div>
                    {donne.nameCocktail}
                  </div>
                  <div className='point'>
                    1
                  </div>
                  <div>
                    {""+donne.priceCocktail+" Ar"}
                  </div>
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