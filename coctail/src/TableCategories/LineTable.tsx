import React from 'react';
import { Button } from 'react-bootstrap';
import { categoryDrink, oneItemtObject } from '../interface';

interface props{
    idLine: any;
    item: categoryDrink;
    functionChangID: (id:number)=>any;
    functionFermetur: ()=>any;
  }

export const LigneList:React.FC<props> = (props) => {
    const idLine = props.idLine;
    const item = props.item;
    const functionChangID = props.functionChangID;
    const functionFermetur = props.functionFermetur;
    const functionParLing:()=>void = ()=>{
        functionChangID(item.idCategory-1);
        functionFermetur()
    }
    return (
        <>
            <tr id={""+item.idCategory} key={item.nameCategory} onClick={functionParLing}>
                <td>{item.idCategory}</td>
                <td>{item.nameCategory}</td>
                <td>{<Button>Suprimer</Button>}</td>
                <td>{<Button>Ajouter</Button>}</td>
            </tr>
        </>
    );
};
