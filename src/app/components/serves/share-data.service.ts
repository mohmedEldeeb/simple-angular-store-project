import { Injectable } from '@angular/core';
import { productCart ,Prodrct} from '../interface/prodect-cart';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  data : productCart[]=[]
  constructor() { }

  setData(x:productCart){
    let d = this.data.find((d:any) => d.prodect === x )
    if(d){
      let newData = this.data.filter((d:any)=>d.prodect !== x )
      let newData2 = this.data.filter((d:any)=>d.prodect === x )
      // x.howMany += newData?.howMany?"":0 

    }
    // d.push(x)
    // this.data=d
  }
  getData(){
    return this.data
  }
  removeItemFromData(i:{}){
    let d =this.data.filter((x:any)=>{
      return  x !== i
    })
    console.log("r",d)
    this.data=d
  }
}
