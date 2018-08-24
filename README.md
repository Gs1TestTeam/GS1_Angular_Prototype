# GS1 Canada Angular Prototype Development Task
August 2018 ~ 

Developed by Jay, Avinash, Olga, Written by Jay

![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `Url:` https://shrouded-brook-49369.herokuapp.com/

**1. Overview:** This taks is to define the prototypes of reusable UI components with up-to-date version Angular and Google Analytics.

**2. Requirements:**

Technical Requirements 

- Use Angular up-to-date version 
- Implement Single Page Application (SPA) 
- Use Typescript 
- Use Google Analytics
- Deploy on free-version web hosting site

Business Requirements 

- Create 3 pages Angular pages (List, Chart, Detail)
- Embed Google Analytics chart
- Be like ProtoType 

**3. Key responsibilities:**
- Draw Visualization Diagrams for creating web pages
- Design reusable UI components with Angular such as ShowLogo, ShowNavigation, ShowHeader, ShowFooter, ShowChart, ShowTable and so on
- Create service modules using Google Analytics API to diplay data in a chart format
- Test unit modules using Jasmine/Angular testing utilities
- Built/Deployed application on a free web hosting provider

**4. System Diagram:**

![eps01](https://github.com/Gs1TestTeam/GS1_Angular_Prototype/blob/master/src/assets/image/system-diagram.jpg)

**5. UI Component Visualization Diagram:**

![eps02](https://github.com/Gs1TestTeam/GS1_Angular_Prototype/blob/master/src/assets/image/visual-diagrams.jpg)

**5. UI Component List:**

|Component Name|Description|File (ts,css,html)|
| ------------ | --------- | ---------------- |
|GS1UiShowHeader|Display GS1 Canada logo, nativation information|gs1-ui-show-header.Component|
|GS1UiShowFooter|Display GS1 Canada logo, corporate information|gs1-ui-show-footer.Component|
|GS1UiShowLogo|Display GS1 Canada logo|gs1-ui-show-table.Component|
|GS1UiShowNavigation|Display GS1 Canada menu (navigation) bar|gs1-ui-show-nav.Component|
|GS1UiShowTable|Display the retrieved data in a table|gs1-ui-show-table.Component|
|GS1UiShowChart|Display the retrieved data in a chart|gs1-ui-show-chart.Component|

[Go Wiki to learn how to use GS1's UI Components](https://github.com/Gs1TestTeam/GS1_Angular_Prototype/wiki)

**6. Class Diagram:**

![eps03](https://github.com/Gs1TestTeam/GS1_Angular_Prototype/blob/master/src/assets/image/class-diagram.jpg)

**7. Composite pages:**

- List page: 

![eps04](https://github.com/Gs1TestTeam/GS1_Angular_Prototype/blob/master/src/assets/image/list-page.jpg)

- Chart page: 

![eps05](https://github.com/Gs1TestTeam/GS1_Angular_Prototype/blob/master/src/assets/image/chart-page.jpg)

- Detail page: 

![eps05](https://github.com/Gs1TestTeam/GS1_Angular_Prototype/blob/master/src/assets/image/detail-page1.jpg)

**8. Implement components and services:**

1. Install node.js (https://nodejs.org/en/download/ )
2. Install Visual Studio Code (https://code.visualstudio.com/ )
3. Install Angular CLI (Command Line Interface) (https://angular.io/tutorial/toh-pt0/ )

Get started: 

- ng new GS1-Angular-Trototype --routing
- src\app\gs1-components-classes\: create interfaces and classes in this app
- src\app\: create components (.ts, .html, .css, .spec) that are used in this app

```js
ng g c GS1UiShowLogo --flat
ng g c GS1UiShowHeader --flat
ng g c GS1UiShowFooter --flat
ng g c GS1UiShowNavigation --flat
ng g c GS1UiShowContents --flat
ng g c GS1UiShowChart --flat
ng g c GS1UiShowDetail --flat
ng g c GS1UiShowTable --flat
ng g c GS1UiShowPageNotFound –flat
```

- src\app\: create servies (.ts) that are used in this app

```js
ng g s GS1GetMenuList --module app --spec false
ng g s GS1GetGoogleAnalitics --module app --spec false
ng g s GS1GetObjects --module app --spec false
ng g s GS1GetData --module app --spec false
```

- src\app\each .ts: implement classes for the components, which is used in .html tag
- src\app\each .html: write UI tags for the components
- src\app\each .css: write styles for the components
- src\app\each .spec: write unit test for the components
- src\index.html: the entry point of this App
- src\styles.css: global css file
- src\app.component (ts, html, css, spec): default componet called by index.html
- src\app.module
- src\app.component

**See more:**

[Wiki to learn how to use GS1's UI Components](https://github.com/Gs1TestTeam/GS1_Angular_Prototype/wiki)

[Issues for GS1's UI Components](https://github.com/Gs1TestTeam/GS1_Angular_Prototype/issues)

Demo url: https://shrouded-brook-49369.herokuapp.com/

