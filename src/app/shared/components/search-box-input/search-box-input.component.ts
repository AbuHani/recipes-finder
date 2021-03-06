/**
 * @author @Abdelrahman
 * @classdesc  Seach box component with multiple search inputs
 * @Input  {number} placeholder
 * @Output  {string[]} textEntered
 */
// ANGULAR MODULES
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'rf-search-box-input',
  templateUrl: './search-box-input.component.html',
  styleUrls: ['./search-box-input.component.scss']
})
export class SearchBoxInputComponent implements OnInit {
  @Input() placeholder: string;
  @Output() textEntered: EventEmitter<string[]> = new EventEmitter();
  textInput: FormControl = new FormControl();
  items: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @desc Trigger input text on enter action
   */
  onEnter(event): void {
    if (event.keyCode === 13) {
      const value = this.textInput.value;
      if (!!value && value.length && this.items.indexOf(value) === -1) {
        this.items.push(value);
        this.textEntered.emit(this.items);
      }
      this.textInput.setValue(null);
    }
  }

  /**
   * @desc Remove text from items Array
   */
  onDelete(index): void {
    this.items.splice(index, 1);
    this.textEntered.emit(this.items);
  }
}
