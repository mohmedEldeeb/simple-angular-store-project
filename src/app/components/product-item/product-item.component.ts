import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { productCart } from '../interface/prodect-cart';
import { DataService } from '../serves/data.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  howManyProduct:number=0
  allItemInCart:any
  itemAddToCart:[]
  @Input() item:any
  constructor(private router:Router,private data:DataService) {
    this.itemAddToCart=[],
    this.allItemInCart=[]
   }

  addToCart ({howMany,product}:any):void {
    
    this.allItemInCart.unshift({howMany:parseInt(howMany),product})
    
    this.data.updateApprovalData(this.allItemInCart)
    alert("product add to cart")

    // console.log(this.itemAddToCart)
  }
  handelChdange():void{

  }
  onSelected(e:any):void{
    this.howManyProduct=e
  }
  ngOnInit(): void {
    this.data.currentApprovalData.subscribe((data:any)=>{
      this.allItemInCart=data
    })
    // this.allItemInCart=
  }

}