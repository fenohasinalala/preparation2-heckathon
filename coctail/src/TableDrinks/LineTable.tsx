import React from 'react';
import { Button } from 'react-bootstrap';
import { drink, oneItemtObject } from '../interface';

interface props{
    idLine: any;
    item: drink;
    functionChangID: (id:number)=>any;
    functionFermetur: ()=>any;
  }

export const LigneList:React.FC<props> = (props) => {
    const idLine = props.idLine;
    const item = props.item;
    const functionChangID = props.functionChangID;
    const functionFermetur = props.functionFermetur;
    const functionParLing:()=>void = ()=>{
        functionChangID(item.idDrink-1);
        functionFermetur()
    }
    return (
        <>
            <tr id={""+item.idDrink} key={item.idDrink} onClick={functionParLing}>
                <td>{item.idDrink}</td>
                <td>{item.nameDrink}</td>
                <td>{item.priceDrink}</td>
                <td>{item.category.nameCategory}</td>
                <td>{<Button>Suprimer</Button>}</td>
                <td>{<Button>Ajouter</Button>}</td>
            </tr>
        </>
    );
};

