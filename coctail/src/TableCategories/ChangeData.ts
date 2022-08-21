import { categoryDrink, oneItemtObject } from "../interface";

export const changeData: (
    data:categoryDrink[],
    valuNumbur:number,
    page:number,
    tri:string|null
    )=>categoryDrink[] = (data,valuNumbur,page,tri)=>{
        let newObject:categoryDrink[]=[];
        if (tri=="idCategory"||tri=="nameCategory") {
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
