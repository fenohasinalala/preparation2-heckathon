import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { categoryDrink, oneItemtObject, sertCategoryDrink } from '../interface';

interface props{
    idLine: any;
    item: categoryDrink;
    functionChangID: (id:number)=>any;
    functionFermetur: ()=>any;
    PutPostCategori: (id: number | null, fermetur: () => void, category: categoryDrink | undefined) => JSX.Element;
    actualisationAllData: () => void;
  }
  
export const LigneList:React.FC<props> = (props) => {
    const[activPut,setActivPut]=useState<Boolean>(false)
    const idLine = props.idLine;
    const item = props.item;
    const functionChangID = props.functionChangID;
    const functionFermetur = props.functionFermetur;
    const functionParLing:()=>void = ()=>{
        functionChangID(item.idCategory-1);
        functionFermetur()
    }

    const modifCategoris = (values:sertCategoryDrink,id:number) => {
        console.log(values);
        try {
            axios.put('http://localhost:8080/categories/'+id,
            {
                nameCategory:values, 
            }
            );
            props.actualisationAllData();
            functionFermetur();
        } catch (error){
            console.log(error);
        }
    }


    const deleteCategoris = (id:number) => {
        try {
            axios.delete('http://localhost:8080/categories/'+id,
            );
            props.actualisationAllData();
            functionFermetur();
        } catch (error){
            console.log(error);
        }
    }


    return (
        <>
            <tr id={""+item.idCategory} key={item.nameCategory} onClick={functionParLing}>
                <td>{item.idCategory}</td>
                <td>{item.nameCategory}</td>
                <td>{<Button onClick={()=>{deleteCategoris(item.idCategory)}}>Suprimer</Button>}</td>
                <td>{<Button onClick={()=>{setActivPut(true)}}>Modifier</Button>}</td>
            </tr>
            {activPut?props.PutPostCategori(item.idCategory,()=>{setActivPut(false)},item):<></>}
        </>
    );
};
