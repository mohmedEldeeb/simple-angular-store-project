import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import { Prodrct, productCart } from '../interface/prodect-cart';

// import * as Data from "../../../assets/data.json"
@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartItem:any
  newDatas:[]=[]
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
    let a:[]=[]
    this.currentApprovalData.subscribe((items:any)=>{
       a=items.filter((d:{})=>{
        return  item !== d
      })
    })
    console.log("hay",a)
    this.approvalData.next(a)
  }
  addOrUpdeatApprovalData(item:productCart){
    let a:{}[]=[]
    this.currentApprovalData.subscribe((items:any)=>{
      this.newDatas=items
      
    })
    let ifItems:any=this.newDatas.find((i:productCart)=>{return item.product === i.product})
      a=this.newDatas.filter((d:productCart)=>{
        return  item.product !== d.product
      })
    if(ifItems){
      console.log(a)

      let addnItem:productCart= { howMany:Number(item.howMany)+parseInt(ifItems.howMany) , product:item.product }
      console.log(a)

      a.unshift(addnItem)
      console.log(a)
      this.approvalData.next(a)
       console.log("hy items")
      console.log(a)

     }else{
       a=this.newDatas
       a.unshift(item)
       this.approvalData.next(a)

       console.log("hy no items")
     }
  }
}
