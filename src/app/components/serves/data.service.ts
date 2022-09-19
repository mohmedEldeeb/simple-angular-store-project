import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable ,BehaviorSubject ,concat,filter, find} from 'rxjs';
import { Prodrct, productCart } from '../interface/prodect-cart';

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
    
      this.approvalData.next(item)
      
  }
}
