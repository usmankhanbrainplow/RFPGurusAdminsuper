
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';
// import { pipe } from 'rxjs/add/operators;
import { map } from 'rxjs/operators';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
// import 'rxjs/add/operator/map';


@Injectable()
export class userService {

    constructor(private http: HttpClient, private _https : Http) { }

    get_user(page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/userDetailandfilter/'+ '?page=' + page,{headers:headers});
    }
    hamzasaeed() {
    //     let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    // headers.append('Content-Type', 'application/json');
        return this.http.get('https://apis.rfpgurus.com/payment/testreq/');
    }
    get_user_payment(page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/paymentDetailandfilter/'+ '?page=' + page,{headers:headers});
    }
    postdesc( des, id){  
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');     
        headers.append('Authorization', 'JWT ' + localStorage.getItem('currentUser'));   
        // https://apis.rfpgurus.com/ticket/Ticketreply_admin/31/
return this._https.post("https://apis.rfpgurus.com/ticket/Ticketreply_admin/" + id + '/',    
 JSON.stringify({
    
"description": des,
}), { headers: headers }).map((res : Response) => res.json())
    }
    get_user_status() {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/maindashboard/',{headers:headers});
    }
postdate(datefrom, dateto, fname, lname ,email) {
    if (localStorage.getItem('currentUser')) {
        const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.post('https://apis.rfpgurus.com/super/userDetailandfilter/',
        JSON.stringify({
            datefrom: datefrom,
            dateto : dateto,
            fname : fname,
            lname : lname,
            email : email


        }),{headers:headers})
        }
    }
postdatepayment(datefrom, dateto,page) {
    if (localStorage.getItem('currentUser')) {
        const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.post('https://apis.rfpgurus.com/super/paymentDetailandfilter/' + '?page =' +page,
        JSON.stringify({
            datefrom: datefrom,
            dateto : dateto

        }),{headers:headers})
        }
    }
    postdatepaymentmonthly(sort) {
        if (localStorage.getItem('currentUser')) {
            const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
            headers.append('Content-Type', 'application/json');
            return this._https.post('https://apis.rfpgurus.com/super/paymentDetailandfilter/' ,
            JSON.stringify({
                sort: sort,
               
    
            }),{headers:headers})
            }
        }
postdate2(datefrom, dateto, page) {
    if (localStorage.getItem('currentUser')) {
        const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.post('https://apis.rfpgurus.com/super/alltikketadmin/' + '?page =' +page,
        JSON.stringify({
            datefrom: datefrom,
            dateto : dateto

        }),{headers:headers})
        }
    }
    eachview(id){
        if (localStorage.getItem('currentUser')){
            // alert(JSON.parse(localStorage.getItem('currentUser')).token)
            let headers = new Headers();
             
            headers.append('Authorization', 'JWT ' + localStorage.getItem('currentUser'));
            headers.append('Content-Type', 'application/json');      
        return this._https.get('https://apis.rfpgurus.com/ticket/Ticketreply_admin/' + id +'/' , {headers: headers}).map((response: Response) => response.json());
    }
    }
        

        postprice(id,price) {
                //mydate,updateddate,id,updatedtitle,updatedprofileurl,upactive,updatedprofile_logo,updatedrating_logo,updatedprice500kwh,updatedprice1000kwh,updatedprice2000kwh,updatedcancelation_fee,updatedfact_sheet,updatedterms_of_service,updatedphone,updatedsign_up,updatedproduct_name,updatedterms_month,updatedrenewable,updatedrate_type,updatedcustomer_type
                console.log(" service object",id,price)
                // const headers = new Headers();
                const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
                      headers.append('Content-Type', 'application/json');
            
                return this._https.put('https://apis.rfpgurus.com/super/pakagepricesetupdate/'+ id +'/', JSON.stringify({
               
                    "price":price
                  // "check":false,
                  
                }), 
                {headers: headers}).map((response: Response) => response.json());
                }



    get_user_subscriber(page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/trialsubscriptionuser/'+ '?page=' + page,{headers:headers});
    }
    get_user_ticket(page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/alltikketadmin/'+ '?page=' + page,{headers:headers});
    }
    get_user_single(id) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/singleuserdetail/'+id+'/',{headers:headers});
    }
    get_price_payment() {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/pakagepriceset/',{headers:headers});
    }
    get_price_img() {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/pricing_images/',{headers:headers});
    }
  
}
