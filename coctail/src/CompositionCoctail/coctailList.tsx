import axios from 'axios';
import { kMaxLength } from 'buffer';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { functionFermetur } from '../donner';
import { cocktailDrink, drink } from '../interface';






const coctailList = (newCompose:cocktailDrink[],dataDrink:drink[],SuprComposeById:(key: number) => void) => {
    return (
        <>
            {newCompose.map((donne,key)=>{return(
              <Form.Group  className="row" controlId="exampleForm.ControlSelect1">
                <Form.Label className="col-3">{"composant n°"+(key+1)}:</Form.Label>
                <Form.Control className="col-4" as="select">
                  {dataDrink.map((don,k)=>{return(
                    <option onClick={()=>{newCompose[key]={idDrink:don.idDrink,nameDrink:don.nameDrink}}}>{don.nameDrink}</option>
                  )})}
                </Form.Control>
                <Button className="col-4 addOrSupr" variant="primary" onClick={()=>{SuprComposeById(key)}}>
                  Supprimer composant
                </Button>
              </Form.Group>
            )
            })}
        </>
    );
};

export default coctailList;