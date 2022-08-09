import { Component, Input, OnInit } from '@angular/core';
import { productCart } from '../interface/prodect-cart';
import { DataService } from '../serves/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  totalPrice:number=0
  items:productCart[]=[]
  show:boolean=false

  constructor(private data :DataService ,private router:Router ) { 
   
  }

  onSubmit(x:any) {
    if(this.totalPrice == 0){
      return alert("please add product to cart first")
    }
    this.data.updateApprovalData([])
    console.log(x);
    this.data.setCartDataTotal(this.totalPrice)

    this.router.navigateByUrl("/success")

  }

  ngOnInit(): void {
    this.data.currentApprovalData.subscribe((data:any)=>{
      this.items=data
      data.map((x:productCart)=>{
        this.totalPrice += (x.howMany * x.product.price) 
      })

      if(data.length > 0){
        this.show=true
      }else{
        this.show=false
      }
      console.log("d",data)
    })
    // console.log(localStorage.getItem("cart"))any
    // console.log(this.items)
  }

}
