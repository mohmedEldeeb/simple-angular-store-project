import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable ,BehaviorSubject ,concat,filter, find} from 'rxjs';
import { Prodrct, productCart } from '../interface/prodect-cart';

// import * as Data from "../../../assets/data.json"
@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartItem:any
  newDatas:[]=[]
  dataFilter:any
  ifDatax:any
  private approvalData = new BehaviorSubject<any>([]);
 currentApprovalData = this.approvalData.asObservable();
  constructor(private http:HttpClient) {
    this.cartItem=[]
  }
  getCartDataTotal():any {
    return this.cartItem
  }
  setCartDataTotal(x:any){
    // this.cartItem.push(x)
    this.cartItem=x
  }
  getData():Observable<[]>{
    return this.http.get<[]>("../../../assets/data.json")
  }
  updateApprovalData(message: []) {
    this.approvalData.next(message)
  }
  deletApprovalData(item:{}) {
    let a:productCart[]=[]
    this.currentApprovalData.subscribe((items:productCart[])=>{
       a=items.filter((d:productCart)=>{
        return  item !== d
      })
    })
    console.log("hay",a)
    this.approvalData.next(a)
  }
  addOrUpdeatApprovalData(item:productCart[]){
    // let a:{}[]=[]
    // let a =this.currentApprovalData.pipe(find((v) => v.prodect == item.product))
    // if(a){

      // let b =this.currentApprovalData.pipe(filter((v) => v.prodect != item.product))
      // this.approvalData.next([...b])
      // console.log(a,b)
    //   a.subscribe((x:any)=>{
    //     console.log(x)
    //   })
    //   b.subscribe((x:any)=>{
    //     console.log(x)
    //   })
    // }
    // subscribe((items:any)=>{
    //   this.newDatas=items
    //   let a =filter((items:productCart)=> items.product !== item.product)
    //   let f =filter((items:productCart)=> items.product == item.product)

      // console.log(f(items))


      // if(!f){
      this.approvalData.next(item)
      // }else{
      // this.approvalData.next([...items,item])

      // }
      
    // })
    // let ifItems:any=this.newDatas.find((i:productCart)=>{return item.product === i.product})
    // this.ifDatax=this.newDatas.find((i:productCart)=>{return item.product === i.product})
    // this.dataFilter=this.newDatas.filter((d:productCart)=>{ return  item.product !== d.product })
    // console.log(this.ifDatax)
    // console.log(this.dataFilter)
    // if(!this.ifDatax){
      // this.dataFilter.unshift({howMany:item.howMany + this.ifDatax.howMany , product:item.product})
      // this.approvalData.next([...this.newDatas,item])

    // }else {
      // this.approvalData.next([...this.dataFilter,{howMany:item.howMany + this.ifDatax.howMany , product:item.product}])

    // }
    //   a=this.newDatas.filter((d:productCart)=>{
    //     return  item.product !== d.product
    //   })
    //   console.log("ifItems" ,ifItems)
    //   console.log("a" ,a)
    // if(ifItems){
    //   console.log(a)

    //   let addnItem:productCart= { howMany:Number(item.howMany)+parseInt(ifItems.howMany) , product:item.product }
    //   console.log(a)

    //   a.unshift(addnItem)
    //   console.log(a)
    //   this.approvalData.next(a)
    //    console.log("hy items")
    //   console.log(a)

    //  }else{
      //  a=this.newDatas
      //  a.unshift(item)

    //    console.log("hy no items")
    //  }
  }
}
