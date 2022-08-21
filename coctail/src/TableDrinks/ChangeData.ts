import { drink, oneItemtObject } from "../interface";

export const changeData: (
    data:drink[],
    valuNumbur:number,
    page:number,
    tri:string|null
    )=>drink[] = (data,valuNumbur,page,tri)=>{
        let newObject:drink[]=[];
        if (tri=="idDrink"||tri=="nameDrink"||tri=="priceDrink"||tri=="category") {
            data.sort((a,b)=>{
                if (a[tri]<b[tri])
                return -1;
             if (a[tri]>b[tri])
                return 1;
             return 0;
            })
        }
        data.map((donne,key)=>{
            if (key>=(page*valuNumbur-valuNumbur)&&key<=(page*valuNumbur-1)) {
                newObject.push(donne);
            }
        })
    return newObject;
};
