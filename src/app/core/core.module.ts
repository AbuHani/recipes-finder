/**
 * @author @Abdelrahman
 * @classdesc   Core module
 */
// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// COMPONENTS
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SpoonacularHttpClient } from './intercepter/spoonacular.intercepter';

const components = [
  MainLayoutComponent
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpoonacularHttpClient,
      multi: true
    },
  ]
})
export class CoreModule { }
