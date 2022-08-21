import React from 'react';
import { oneItemtObject } from '../interface';

interface props{
    idLine: any;
    item: oneItemtObject;
    functionChangID: (id:number)=>any;
    functionFermetur: ()=>any;
  }

export const LigneList:React.FC<props> = (props) => {
    const idLine = props.idLine;
    const item = props.item;
    const functionChangID = props.functionChangID;
    const functionFermetur = props.functionFermetur;
    const functionParLing:()=>void = ()=>{
        functionChangID(item.id-1);
        functionFermetur()
    }
    return (
        <>
            <tr id={""+item.id} key={item.name} onClick={functionParLing}>
                <td>{item.comp1}</td>
                <td>{item.comp2}</td>
                <td>{item.comp3}</td>
                <td>{item.comp4}</td>
                <td>{item.comp5}</td>
            </tr>
        </>
    );
};

