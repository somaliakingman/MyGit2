import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sometable',
  templateUrl: './sometable.component.html',
  styleUrls: ['./sometable.component.css']
})
export class SometableComponent implements OnInit {

  message=":)";
  pwd;
  uname;

  constructor() { }

  ngOnInit() {
  }
justclick(a,b){
  
  if(b=="123")
  {this.message="good guy";alert('thank '+a);}
  else{  this.message="go away,dude";alert('go away '+a);}
}
}
