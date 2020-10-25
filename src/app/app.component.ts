/**
 * @author @Abdelrahman
 * @classdesc   App component
 */
// ANGULAR MODULES
import { Component } from '@angular/core';

@Component({
  selector: 'rf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipes-finder';
}