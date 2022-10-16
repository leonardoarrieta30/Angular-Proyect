import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Dermatologist} from "../model/dermatologist";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DermatologistsService extends BaseService<Dermatologist>{

  constructor(http:HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/dermatologists';
  }

}
