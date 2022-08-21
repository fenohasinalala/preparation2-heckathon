import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { newDrink } from '../donner';
import { categoryDrink, cocktail, cocktailDrink, drink } from '../interface';
import "./style.css";

function CompositionCoctail() {


  const [dataDrink,setDataDrink] = useState<drink[]>([newDrink]);
  const [loagDrink,setLoagDrink] = useState<number>(0);
  const [newNameCocktail, setNewNameCocktail]= useState<string>('');
  const [priceDrink, setPriceDrink]= useState<number>(0);
  const [newCompose, setNewCompose]= useState<cocktailDrink[]>([{
    idDrink: dataDrink[0].idDrink,
    nameDrink: dataDrink[0].nameDrink
  }]);


  useEffect(() => {
      axios({
        url: "https://virtserver.swaggerhub.com/fenohasinalala/preparation_hackathon/1.0.0/drinks"
      })
        .then(response => {
          setDataDrink(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log("error in GET DRINKS :");
          console.log(error);
        });
    }, [loagDrink]);







  return (
    <div className="conteneuAllcompositon">
      <h2 className='titleCoctail'> COMPOSITION DE COCKTAIL</h2>

      

        <Form className="conteneuCompositon container">

            <Form.Group className="row" controlId="formBasicText">
                <Form.Label className="col-3">Nom du coctail:</Form.Label>
                <Form.Control className="col-4" type="text" placeholder="Enter un coctail" value={newNameCocktail} onChange={
                  (e)=>{setNewNameCocktail(e.target.value)}
                }/>
                <Button className="col-4 addOrSupr" variant="primary" type="submit" onClick={()=>{setNewCompose(newCompose
              )}} >
                    Ajouter composant
              </Button>
            </Form.Group>

            {newCompose.map((donne,key)=>{return(
                <Form.Group  className="row" controlId="exampleForm.ControlSelect1">
                <Form.Label className="col-3">{"composant n°"+(key+1)}:</Form.Label>
                <Form.Control className="col-4" as="select">
                  {dataDrink.map((don,k)=>{return(
                    <option onClick={()=>{newCompose[key]={idDrink:don.idDrink,nameDrink:don.nameDrink}}}>{don.nameDrink}</option>
                  )})}
                </Form.Control>
                <Button className="col-4 addOrSupr" variant="primary" type="submit">
                  Supprimer composant
                </Button>
              </Form.Group>
            )
            })}

            <Form.Group className="row justify-content-center" controlId="bouttonFunction1">
                <Button className="col-4 saveBoutton" variant="primary" type="submit">
                    Enregistrer
                </Button>
            </Form.Group>

        </Form>
    </div>
  );
}

export default CompositionCoctail;