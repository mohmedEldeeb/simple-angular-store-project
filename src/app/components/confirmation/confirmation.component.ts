import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../serves/data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  total:number=0
  constructor(private http:DataService ,private router:Router){
    
  }
  moveToProductList(){
    this.router.navigateByUrl("/product-list")
  }
  ngOnInit(): void {
    this.total= this.http.getCartDataTotal()
  }

}
