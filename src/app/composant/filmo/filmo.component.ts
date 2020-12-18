import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
const url:string = 'https://api.themoviedb.org/3/discover/movie?api_key=0606619344a9820d44f5de279cea2672&sort_by=popularity.desc';

@Component({
  selector: 'app-filmo',
  templateUrl: './filmo.component.html',
  styleUrls: ['./filmo.component.css']
})
export class FilmoComponent implements OnInit {

  constructor(private http: HttpClient) { }
  list: any;
  
  ngOnInit(): void 
  {
    this.http.get(url).subscribe( (data:any)=>{
      console.log(data)
      this.list = data.results;
    })
  }

}
