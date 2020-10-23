import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchBoxInputComponent } from './components/search-box-input/search-box-input.component';
import { PaginationComponent } from './components/pagination/pagination.component';


const components = [
  SearchBoxInputComponent,
  PaginationComponent
];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ...components
  ]
})
export class SharedModule { }
