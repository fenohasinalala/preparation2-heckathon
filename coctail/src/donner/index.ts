import axios from "axios";
import { useEffect, useState } from "react";
import { createPropertyAssignment } from "typescript";
import { categoryDrink, cocktail, drink, oneItemtObject } from "../interface";

export const items: oneItemtObject[]=[
    {
        id:0,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:1,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:2,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:3,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:4,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:5,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:6,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:7,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:8,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:9,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:10,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:11,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:12,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:13,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:14,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:15,
        name:"aa",
        comp1:"1",
        comp2:"1",
        comp3:"1",
        comp4:"1",
        comp5:"1",
    },
    {
        id:16,
        name:"aa",
        comp1:"2",
        comp2:"2",
        comp3:"2",
        comp4:"2",
        comp5:"2",
    }
];
export const functionChangID: (number:number)=>void = (number)=>{console.log(number);};
export const functionFermetur: ()=>void = ()=>{};
export const functionFermeturPost: ()=>void = ()=>{};

export const newDrink:drink={
    "idDrink": 0,
    "nameDrink": "string",
    "priceDrink": 0,
    "category": {
      "idCategory": 0,
      "nameCategory": "string"
    }
  }

  export const newCoctail:cocktail={
    idCocktail: 0,
    nameCocktail: "",
    priceCocktail: 0,
    compose: [
      {
        idDrink: 1,
        nameDrink: 'string'
      }
    ],
    numberCompose: 1
  }

  export const newCategory:categoryDrink={
    "idCategory": 0,
    "nameCategory": "string"
  }

  