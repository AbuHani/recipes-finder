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

  onEnter(): void {
    const value = this.textInput.value;
    if (!!value && value.length && this.items.indexOf(value) === -1) {
      this.items.push(value);
      this.textEntered.emit(this.items);
    }
    this.textInput.setValue(null);
  }

  onDelete(index): void {
    this.items.splice(index, 1);
    this.textEntered.emit(this.items);
  }
}
