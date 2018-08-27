/********************************************************************************* 
 * Project: GS1 Canada Angular Prototype
 * File: gs1-get-record-list.service.ts
 * 
 * 
 * Implemented by Olga Arsenieva
 * Date: 2018.08.27
 * 
********************************************************************************/  

import { Injectable } from '@angular/core';
import { Record } from './Record';
import {  RecordList } from './RecordList';

@Injectable({
  providedIn: 'root'
})
export class Gs1GetRecordListServiceService {

  //constructor() { }
  getRecordList(): Record[] { return RecordList; }
}
