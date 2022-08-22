import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { functionFermetur, newDrink } from '../donner';
import { categoryDrink, cocktail, cocktailDrink, drink } from '../interface';
import coctailList from './coctailList';
import "./style.css";

interface Props {
  dataDrink:drink[],actualisationAllData:() => void, 
  returnAllValur:() => void, 
  setActivUpdat:React.Dispatch<React.SetStateAction<boolean>>,
}



export const CompositionCoctail:React.FC<Props> = ({dataDrink,returnAllValur,setActivUpdat,actualisationAllData})=>{
  const cocktailsPost = (values:{nameCocktail:string,compose:cocktailDrink[]}) => {
    console.log(values);
    try {
        axios.post('https://virtserver.swaggerhub.com/fenohasinalala/preparation_hackathon/1.0.0/cocktails',
        {
            nameCocktail:values.nameCocktail,                    
            compose:values.compose,
            }
        );
        actualisationAllData();
        functionFermetur();
    } catch (error){
        console.log(error);
    }
}


  
  const [newNameCocktail, setNewNameCocktail]= useState<string>('');
  const [priceDrink, setPriceDrink]= useState<number>(0);
  const [newCompose, setNewCompose]= useState<cocktailDrink[]>([{
    idDrink: dataDrink[0].idDrink,
    nameDrink: dataDrink[0].nameDrink
  }]);




    const AddCompose = ()=>{
      let newValu = newCompose;
      newValu.push(
          {
            idDrink: dataDrink[0].idDrink,
            nameDrink: dataDrink[0].nameDrink
          }
      )
      console.log(newValu);
      setNewNameCocktail(newNameCocktail.endsWith(" ")?newNameCocktail.slice(0, -1):newNameCocktail+" ");
      setNewCompose(newValu)
    }

    const SuprComposeById = (key:number)=>{

      if (newCompose.length!=1) {
        if (newCompose.length-1==key) {
          if (newCompose.length!=1) {
            let newValu = newCompose;
            newValu.splice(key-1, 2 , newValu[key-1])
            console.log(newValu);
            setNewNameCocktail(newNameCocktail.endsWith(" ")?newNameCocktail.slice(0, -1):newNameCocktail+" ");
            setNewCompose(newValu)
          }
        }else{
          let newValu = newCompose;
          newValu.splice(key, 2 , newValu[key+1])
          console.log(newValu);
          setNewNameCocktail(newNameCocktail.endsWith(" ")?newNameCocktail.slice(0, -1):newNameCocktail+" ");
          setNewCompose(newValu)
        }
      }
    }



  return (

    <>
      <div className="fonds2" onClick={()=>(returnAllValur())}></div>
      <div className="fonds">
      

        <div className="conteneuAllcompositon">


        <div className="whitFond">
          <h2 className='titleCoctail'> COMPOSITION DE COCKTAIL</h2>
            <Form className="conteneuCompositon container">

                <Form.Group className="row" controlId="formBasicText">
                    <Form.Label className="col-3">Nom du coctail:</Form.Label>
                    <Form.Control className="col-4" type="text" placeholder="Enter un coctail" value={newNameCocktail} onChange={
                      (e)=>{setNewNameCocktail(e.target.value)}
                    }/>
                    <Button className="col-4 addOrSupr" variant="primary" onClick={()=>{AddCompose();console.log(newCompose)}} >
                        Ajouter composant
                  </Button>
                </Form.Group>

                {newCompose?coctailList(newCompose,dataDrink,SuprComposeById):<></>}

                <Form.Group className="row justify-content-center" controlId="bouttonFunction1">
                    <Button className="col-4 saveBoutton" variant="primary" onClick={()=>{cocktailsPost({nameCocktail:newNameCocktail,compose:newCompose});returnAllValur()}}>
                        Enregistrer
                    </Button>
                </Form.Group>

            </Form>

          </div>

        </div>


      </div>

    </>




 
  );
}
