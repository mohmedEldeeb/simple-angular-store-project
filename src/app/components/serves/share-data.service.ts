import { Injectable } from '@angular/core';
import { productCart ,Prodrct} from '../interface/prodect-cart';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  data : productCart[]=[]
  constructor() { }

  setData({howMany,product}:productCart){
    
    let f=  this.data.filter((x:any) => x.product.id === product.id )
    let d=  this.data.filter((x:any)=>   x.product.id !== product.id )
    console.log("F",f)
    console.log("d",d)
    if (f[0]){
      this.data=[{howMany:howMany+f[0].howMany ,product:f[0].product},...d]
    }else {
      this.data=[{howMany:howMany ,product},...d]
    }
   console.log(this.data)
  }
  getData(){
    return this.data
  }
  removeItemFromData(i:productCart){
    let d =this.data.filter((x:productCart)=>{
      return  x.product.id !== i.product.id
    })
    console.log("r",d)
    this.data=d
  }
  removeAll(){
    this.data=[]
  }
}
