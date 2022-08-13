import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { productCart } from '../interface/prodect-cart';
import { DataService } from '../serves/data.service';
import { ShareDataService } from '../serves/share-data.service';

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
  @Output() newDatas =new EventEmitter<any>(); 
  onyouNeedToSendingData(data:any){
    this.newDatas.emit(data)
  }
  // why you wont my use @output i don't need share data from cahild to parent
  constructor(private router:Router,private data:DataService ,private ahareData:ShareDataService) {
    this.itemAddToCart=[],
    this.allItemInCart=[]
   }

   addToCart ({howMany,product}:any) {
    this.ahareData.setData({howMany:Number(howMany),product})
    // this.data.addOrUpdeatApprovalData({howMany,product})
    // let ifD=this.allItemInCart.filter((d:productCart)=>{return d.product==product})
    // let x=this.allItemInCart.filter((d:productCart)=>{return d.product !==product})
    // console.log(ifD)
    // if(ifD[0]){
    //   this.data.addOrUpdeatApprovalData([...x,{howMany:Number(howMany)+Number(ifD.howMany),product}])
    // }else {
    //   this.data.addOrUpdeatApprovalData([...x,{howMany,product}])
    // }
    // let ifProduct =this.allItemInCart.find((x:any)=> x.product ==product)
    // console.log("if",ifProduct)
    // if(ifProduct){
    //   let meny = ifProduct.howMany
    //   let newproduct = this.allItemInCart.filter((x:any)=> x.prodect !== product)
    //   console.log(newproduct,"filter")
    //   newproduct.unshift({howMany:parseInt(howMany) + meny,product})
    //   this.data.updateApprovalData(newproduct)

    // }else {

    //   this.allItemInCart.unshift({howMany:parseInt(howMany),product})
    //   this.data.updateApprovalData(this.allItemInCart)
    // }
    // this.data.currentApprovalData.subscribe((data:any)=>{
    //   this.allItemInCart=data
    // })
    alert("product add to cart")

    // console.log(this.itemAddToCart)
  }
  handelChdange():void{

  }
  onSelected(e:any):void{
    this.howManyProduct=e
  }
  ngOnInit(): void {
    // this.data.currentApprovalData.subscribe((data:any)=>{
    //   this.allItemInCart=data
    // })
    this.allItemInCart=this.ahareData.getData()
  }

}
