/**
 * @author @Abdelrahman
 * @classdesc   Responsible for creating pagination
 * @Input  {number} pageSize
 * @Input  {number} maxPages
 * @Input  {number} totalItems
 * @Input  {number} currentPage
 * @Output  {number} pageChanged
 */
// ANGULAR MODULES
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

// SERVICES
import paginate from './paginate';

@Component({
  selector: 'rf-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() pageSize: number = 10;
  @Input() maxPages: number = 10;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();
  @Input() totalItems: number;
  @Input() disable: boolean;
  @Input() currentPage = 1;
  pager: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalItems && changes.totalItems.currentValue !== changes.totalItems.previousValue) {
      this.setPage(this.currentPage);
    }
  }

  /**
   * @desc Trigger changes of page number
   * @params  {number} page
   */
  setPage(page: number): void {
    this.pager = paginate(
      this.totalItems,
      page,
      this.pageSize,
      this.maxPages
    );
    this.pageChanged.emit(this.pager);
  }
}
