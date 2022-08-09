import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';

// import * as Data from "../../../assets/data.json"
@Injectable({
  providedIn: 'root'
})
export class DataService {
  cartItem:any
  private approvalData = new BehaviorSubject([]);
 currentApprovalData = this.approvalData.asObservable();
  constructor(private http:HttpClient) {
    this.cartItem=[]
  }
  getCartDataTotal():any {
    return this.cartItem
  }
  setCartDataTotal(x:any){
    this.cartItem.push(x)
  }
  getData():Observable<[]>{
    return this.http.get<[]>("../../../assets/data.json")
  }
  updateApprovalData(message: []) {
    this.approvalData.next(message)
    }
}
