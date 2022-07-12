import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { PeriodicElement } from '../../models/periodic-element';

@Component({
  selector: 'app-universities-table',
  templateUrl: './universities-table.component.html',
  styleUrls: ['./universities-table.component.scss']
})
export class UniversitiesTableComponent implements OnInit {

  public dataSource = new MatTableDataSource<PeriodicElement>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  public themeIsDark: boolean = false;

  public columnsSticky: boolean = false;

  get displayedColumns(): string[] {
    if (window.innerWidth > 568){
      return [
        'name', 'alpha_two_code', 'domains', 'web_pages'
      ];
    } else {
      return [
        'name'
      ];
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  initTableWidth(){
    return document.querySelector<HTMLElement>('#table-container')!.offsetWidth;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  adjustStickyStatus(){
    this.columnsSticky = !this.columnsSticky;
  }

  drop(event: CdkDragDrop<any[]>) {
    const previousIndex = this.dataSource.data.findIndex(row => row === event.item.data);
    moveItemInArray(this.dataSource.data,previousIndex, event.currentIndex);
    this.dataSource.data = this.dataSource.data.slice();
  }
}
