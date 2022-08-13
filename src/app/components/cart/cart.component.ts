import { Component, Input, OnInit } from '@angular/core';
import { productCart ,Prodrct} from '../interface/prodect-cart';
import { DataService } from '../serves/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShareDataService } from '../serves/share-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  fullName:string=""
  totalPrice:number=0
  items:productCart[]=[]
  show:boolean=false

  constructor(private data :DataService ,private router:Router ,private shareData:ShareDataService) { 
   
  }

  onSubmit(x:any) {
    if(this.totalPrice == 0){
      return alert("please add product to cart first")
    }
    this.data.updateApprovalData([])
    console.log(x.value ,x);
    this.data.setCartDataTotal(this.totalPrice)
    this.shareData.removeAll()
    this.router.navigateByUrl("/success")

  }

  deletaItem(item:productCart){
    this.shareData.removeItemFromData(item)
    this.items=this.shareData.getData()
    // this.data.deletApprovalData(item)
    // this.totalPrice=0
    // this.items.map((x:productCart)=>{
    //   this.totalPrice += (x.howMany * x.product.price) 
    // }) 
    alert(`alrdey you are removed ${item.product.name}`)
  }
  validateName(x:any){
    console.log(x)
  }
  validateAddress(x:any){
    console.log(x)
  }
  validateCredutCard(x:any){
    console.log(x)
  }
  ngOnInit(): void {
    this.items=this.shareData.getData()
    this.shareData.getData().map((x:productCart)=>{
      this.totalPrice += (x.howMany * x.product.price) 
    })
    // this.data.currentApprovalData.subscribe((data:any)=>{
    //   this.items=data
    //   data.map((x:productCart)=>{
    //     this.totalPrice += (x.howMany * x.product.price) 
    //   })

    //   if(data.length > 0){
    //     this.show=true
    //   }else{
    //     this.show=false
    //   }
    //   // console.log("d",data)
    // })
    // console.log(localStorage.getItem("cart"))any
    // console.log(this.items)
  }

}
