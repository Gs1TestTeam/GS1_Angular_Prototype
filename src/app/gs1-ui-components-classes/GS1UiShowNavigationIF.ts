/********************************************************************************* 
 * Project: GS1 Canada Angular Prototype
 * File: GS1UIShowNavigationIF.ts
 * 
 * 
 * Created by Jongkuk Lee 
 * Created date: 2018.08.13
 * 
********************************************************************************/  
export interface GS1UIShowNavigationIF extends GS1UIComponentsIF {
    displayNames: Array<string>;
    goUrls: Array<string>;
}