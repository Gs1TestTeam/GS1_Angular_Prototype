/********************************************************************************* 
 * Project: GS1 Canada Angular Prototype
 * File: gs1-get-menu-list.service.ts
 * 
 * 
 * Implemented by Olga Arsenieva
 * Date: 2018.08.15
 * 
********************************************************************************/  

import { Injectable } from '@angular/core';
import { MenuList } from './Menu-List';


@Injectable({
  providedIn: 'root'
})
export class GS1GetMenuListService {

 // constructor() { }
  getMenuList() { return MenuList; }
}
