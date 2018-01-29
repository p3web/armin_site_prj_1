import { Injectable } from "@angular/core";
import { Http , Headers , Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { RequestOptions } from "@angular/http/src/base_request_options";
import { Observable } from "rxjs/Observable"
import { error } from "selenium-webdriver";


@Injectable()
export class HttpService{
    
    DATA : object;
    
    constructor(private _http : Http){}

   private getRequest(url : string , param : Object):Observable<object>{
        let Header = new Headers();
        let authtoken = localStorage.getItem('authtoken');
        
        // Headers
        Header.append('Content-Type' , 'application/json')
        Header.append('Access-Control-Allow-Origin', '*');
        Header.append('Accept', 'application/json');
        Header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');        
        Header.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
        // authtoken Header
        if(authtoken){
            Header.append("Authorization", 'Token ' + authtoken);
        }
        
        
        // get Keys
        let Keyparam : string[] = Object.keys(param);
        // make url
        url += '?';
        for(let i = 0 ; i < Keyparam.length ; i++){
            url += (i != 0)?'&' : '' ;
            url += Keyparam[i] +  '=' + param[Keyparam[i]];
        }

        // get Request
        return this._http.get(url , {
            headers : Header,
            method : 'GET'
        }).map((res :Response) => <object>res.json());
    }

  private  postRequest (url : string , param : Object): Observable<object>{
        let JsonParam : string = JSON.stringify(param);
        let Header = new Headers();
        let authtoken = localStorage.getItem('authtoken');
        
        // Headers
        Header.append('Content-Type' , 'application/json')
        Header.append('Access-Control-Allow-Origin', '*');
        Header.append('Accept', 'application/json');
        Header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');        
        Header.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
        // authtoken Header
        if(authtoken){
            Header.append("Authorization", 'Token ' + authtoken);
        }
        
        
        // Post Request
        return this._http.post (url , JsonParam , {
            method : 'POST',
            headers : Header
        }).map((res : Response) => <object>res.json());     
    }

    sendRequest(url:string , param:object , method:string , callBackFunc:any){
        if(method.toLocaleLowerCase() == 'post'){
            this.postRequest(url , param).subscribe(
                data => this.DATA = data,
                error => console.log(error),
                () => this.GetData(callBackFunc)
            )
        }else{
            this.getRequest(url , param).subscribe(
                data => this.DATA = data,
                error => console.log(error),
                () => this.GetData(callBackFunc)
            )
        }
    }

  private  GetData(callBackFunc:any){
        
        if(this.DATA['act'] == 'msg'){
            alert(this.DATA['text']);
        }
        else if(callBackFunc != null){
            callBackFunc(this.DATA);
        }
    }
}

