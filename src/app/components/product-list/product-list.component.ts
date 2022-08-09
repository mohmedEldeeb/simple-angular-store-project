import { Component, OnInit } from '@angular/core';
import { DataService } from '../serves/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  dataStore:any
  constructor(private http:DataService){}

  ngOnInit(): void {
    this.http.getData().subscribe(data=>{
      this.dataStore=data
      console.log(data)
    })
  }

}
