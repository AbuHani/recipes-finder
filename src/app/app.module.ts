/**
 * @author @Abdelrahman
 * @classdesc   App module
 */
// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';

// MODULES
import { CoreModule } from '@rf/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
