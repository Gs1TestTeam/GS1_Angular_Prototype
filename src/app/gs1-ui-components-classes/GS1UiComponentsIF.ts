/********************************************************************************* 
 * Project: GS1 Canada Angular Prototype
 * File: GS1UIComponentsIF.ts
 * 
 * 
 * Created by Jongkuk Lee 
 * Created date: 2018.08.13
 * 
********************************************************************************/  
const DEFAULT_SLOGAN1: string = "Welcome to GS1 Canada";
const DEFAULT_SLOGAN2: string = "The Global Language of Business";
const DEFAULT_LOGO_SIZE_W: Number = 60;
const DEFAULT_LOGO_SIZE_H: Number = 60;
interface GS1UIComponentsIF extends GS1CompnentsIF {
    displayWidth?: Number;
    displayHeight?: Number;
}