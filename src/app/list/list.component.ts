import { Component, OnInit } from '@angular/core';

//link http.service.ts to list component to use the service.
import { HttpService} from '../http.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object;
  //below we set the constuctor to have a dependency injection
  constructor(private _http: HttpService) { }


  //_http is the varaiable with the type HttpService
  ngOnInit(): void {
    //call method within service file
    this._http.getBeer().subscribe(data =>{
      this.brews = data;
      console.log(this.brews)
    });
  }

}
