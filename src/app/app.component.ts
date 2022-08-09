import { Component } from '@angular/core';
import { DataService } from './components/serves/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-stor-project';
  dataStore:any
  constructor(private http:DataService){}

  ngOnInit(): void {
    this.http.getData().subscribe(data=>{
      this.dataStore=data
      console.log(data)
    })
  }
  
}
