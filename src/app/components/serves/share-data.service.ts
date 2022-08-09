import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  data : any[]=[]
  constructor() { }

  setData(x:any){
    let d = this.data
    d.push(x)
    this.data=d
  }
  getData(){
    return this.data
  }
}
