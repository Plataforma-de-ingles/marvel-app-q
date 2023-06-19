import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  
  @Input() pageSize: number = 0;
  @Input() pageIndex: number = 0;
  @Input() totalItems: number = 1;
  @Output() pageIndexChanged = new EventEmitter<number>();

  get isFirstPage(): boolean {
    return this.pageIndex === 0;
  }

  get isLastPage(): boolean {
    return (this.pageIndex + this.pageSize) === this.totalItems;
  }

  public onPrevPage(): void {
    if (this.pageIndex > 0) {
      this.pageIndex -= this.pageSize;
      this.pageIndexChanged.emit(this.pageIndex);
    }
  }

  public onNextPage(): void {
    if (this.pageIndex < this.totalItems) {
      this.pageIndex += this.pageSize ;
      this.pageIndexChanged.emit(this.pageIndex);
    }
  }
}
