import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  amount;
  msisdn;



  topuparray = [1, 2, 3];
  constructor(public http: Http) {
    this.load();

  }

  load() {

    let url = "http://localhost:3000/test-tran";
    this.http.get(url)
      .map((res) => { return res.json() })
      .subscribe((data) => {
        console.log(data);
        this.topuparray = data;
      })
  }

  addtopup(a, b) {
    let url = "http://localhost:3000/post_f_angular";
    let obj = { amount: a, msisdn: b };
    let json = JSON.stringify(obj);

    console.log(json);
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header })
    this.http.post(url, json, options)
      .map(res => res.json())
      .subscribe(data => {
        console.log('create topup success')
        this.load();
      });
  }
  ngOnInit() {
  }

}
