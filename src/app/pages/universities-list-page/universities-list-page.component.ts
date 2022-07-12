import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UniversityService } from '../../services/university/university.service';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme/theme.service';
import { UniversitiesTableComponent } from '../../components/universities-table/universities-table.component';
import { PeriodicElement } from '../../models/periodic-element';

@Component({
  selector: 'app-universities-list-page',
  templateUrl: './universities-list-page.component.html',
  styleUrls: ['./universities-list-page.component.scss']
})
export class UniversitiesListPageComponent implements OnInit, OnDestroy {

  private destroyed$ = new ReplaySubject<boolean>();

  public country: string = '';

  public themeIsDark: boolean = false;

  private subscription: Subscription;

  @ViewChild(UniversitiesTableComponent) universitiesTableComponent: UniversitiesTableComponent;

  constructor(private universityService: UniversityService, private themeService: ThemeService) {

    this.subscription = this.themeService.getSelectedTheme().pipe(takeUntil(this.destroyed$)).subscribe(value => {
      if (value != this.themeIsDark){
        this.changeTheme(value);
      }
    });

  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  getUniversities(){
    this.universityService.getUniversities(this.country).pipe(takeUntil(this.destroyed$)).subscribe(result => {
      this.universitiesTableComponent.dataSource.data = result;
    });
  }

  changeTheme(event: boolean){
    this.themeIsDark = event;
    this.universitiesTableComponent.themeIsDark = event;
  }
}
