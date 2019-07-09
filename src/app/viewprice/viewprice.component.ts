 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { PagerService } from '../servicefile/paginator.service';
import { userService } from '../viewuser/viewuser.service';
 

@Component({
  selector: 'app-viewprice',
  templateUrl: './viewprice.component.html',
  styleUrls: ['./viewprice.component.scss']
})
export class ViewpriceComponent implements OnInit {
  personal :any;
  pager: any = {};
  pageSize = '10';
  pagers;
  pagersss;
  date;
  constructor(private _nav: Router, private _serv: userService,private pagerService: PagerService  ) { }

  ngOnInit() {
    this.viewuser()
  }
  viewuser(){
    
    
    this._serv.get_price_payment().subscribe(
      data => {
          this.personal = data.json();
          this.pagers = data['totalItems']

   
          console.log(this.personal)
          
      });
  }
  price;
  package;
  duration;

  veiwvalue(val1,val2,val3){
    this.duration = val1;
    this.package = val2;
    this.price = val3;
console.log(val1,val2,val3)

  }

}
