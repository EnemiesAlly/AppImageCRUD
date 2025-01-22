import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(
    public http: HttpClient
  ) { }


    //ฟังก์ชั่นเชื่อมต่อ api ระบบบันทึกข้อมูล
    addproduct(formData: any) {
      return this.http.post('http://127.0.0.1/class2-4/crudapi/upload.php', formData);
    }  

    //เชื่อมต่อ api แสดงข้อมูล
    showproduct(){
      return this.http.get('http://127.0.0.1/class2-4/crudapi/read.php');
    }


}
