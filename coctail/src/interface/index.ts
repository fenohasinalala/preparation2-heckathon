export interface oneItemtObject {
    id:number;
    name:string;
    comp1:string;
    comp2:string;
    comp3:string;
    comp4:string;
    comp5:string;
};




export interface cocktail {
    idCocktail: number,
    nameCocktail: string,
    priceCocktail: number,
    compose: cocktailDrink[],
    numberCompose: number
};


export interface cocktailDrink {
    idDrink: number,
    nameDrink: string
};

export interface drink {
        "idDrink": number,
        "nameDrink": string,
        "priceDrink": number,
        "category": categoryDrink
};

export interface setDrink {
    "nameDrink": string,
    "priceDrink": number,
    "category": categoryDrink
};

export interface categoryDrink {
    "idCategory": number,
    "nameCategory": string
};

export interface sertCategoryDrink {
    "nameCategory": string
};

export interface compose {
    idDrink:number;
    nameDrink:boolean;
};

export interface Gender {
    Confidence:number;
    Value:string;
};

export interface Landmark {
    Type:string;
    X:number;
    Y:number;
};
