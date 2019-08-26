import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
  url:string= 'https://nodejsapidemo.herokuapp.com/tasks/';

  constructor(private http: HttpClient) { }
  getAllTask() {
    return this.http.get(this.url);
  }
deleteTask(Id) {
  let head = new HttpHeaders().set("Content-Type","application/json");
  return this.http.delete(this.url + Id,{headers:head});
}
getUserById(Id) {
  return this.http.get(this.url+Id);
}
editTask(newtask) {
  console.log(newtask);
  let head = new HttpHeaders().set("Content-Type","application/json");
  let body = JSON.stringify(newtask);
  return this.http.put(this.url+newtask.Id,body,{ headers: head });
}
AddTask(newtask) {
  let head = new HttpHeaders().set("Content-Type","application/json");
  let body = JSON.stringify(newtask);
  return this.http.post(this.url,body, {headers: head});
}
}
