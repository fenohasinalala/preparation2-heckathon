import axios from 'axios';
import { isEmptyArray } from 'formik';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { drink, oneItemtObject, setDrink } from '../interface';

interface props{
    idLine: any;
    item: drink;
    functionChangID: (id:number)=>any;
    functionFermetur: ()=>any;
    PutPostDrink:(id: number | null, fermetur: () => void, drink:drink | undefined) => JSX.Element;
    actualisationAllData: () => void;
  }

export const LigneList:React.FC<props> = (props) => {
    const[activPut,setActivPut]=useState<Boolean>(false)
    const idLine = props.idLine;
    const item = props.item;
    const functionChangID = props.functionChangID;
    const functionFermetur = props.functionFermetur;
    const functionParLing:()=>void = ()=>{
        functionChangID(item.idDrink-1);
        functionFermetur()
    }

    const modifDrink = (values:setDrink,id:number) => {
        console.log(values);
        try {
            axios.put('http://localhost:8080/drinks/'+id,
            values, 
            );
            props.actualisationAllData();
            functionFermetur();
        } catch (error){
            console.log(error);
        }
    }


    const deletDrink = (id:number) => {
        try {
            axios.delete('http://localhost:8080/drinks/'+id,
            );
            props.actualisationAllData();
            functionFermetur();
        } catch (error){
            console.log(error);
        }
    }


    return (
        <>
            <tr id={""+item.idDrink} key={item.idDrink} onClick={functionParLing}>
                <td>{item.idDrink}</td>
                <td>{item.nameDrink}</td>
                <td>{item.priceDrink}</td>
                <td>{item.category.nameCategory}</td>
                <td>{<Button onClick={()=>{deletDrink(item.idDrink)}}>Suprimer</Button>}</td>
                <td>{<Button onClick={()=>{setActivPut(true)}}>Modifir</Button>}</td>
            </tr>
            {activPut?props.PutPostDrink(item.idDrink,()=>{setActivPut(false)},item):<></>}
        </>
    );
};

