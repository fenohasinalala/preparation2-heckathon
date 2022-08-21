import { oneItemtObject } from "../interface";

export const changeData: (
    data:oneItemtObject[],
    valuNumbur:number,
    page:number,
    tri:string|null
    )=>oneItemtObject[] = (data,valuNumbur,page,tri)=>{
        let newObject:oneItemtObject[]=[];
        if (tri=="id"||tri=="comp1"||tri=="comp2"||tri=="comp3"||tri=="comp4"||tri=="comp5") {
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