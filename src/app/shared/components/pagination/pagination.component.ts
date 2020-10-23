import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import paginate from './paginate';

@Component({
  selector: 'rf-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  pager: any = {};
  @Input() pageSize: number = 10;
  @Input() maxPages: number = 10;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();
  @Input() totalItems: number;
  @Input() currentPage = 1;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalItems && changes.totalItems.currentValue !== changes.totalItems.previousValue) {
      this.setPage(this.currentPage);
    }
  }

  setPage(page): void {
    this.pager = paginate(
      this.totalItems,
      page,
      this.pageSize,
      this.maxPages
    );
    this.pageChanged.emit(this.pager);
  }
}
