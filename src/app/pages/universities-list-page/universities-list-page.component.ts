import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UniversityService } from '../../services/university/university.service';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject, Subscription, Observable } from 'rxjs';
import { ThemeService } from '../../services/theme/theme.service';
import { UniversitiesTableComponent } from '../../components/universities-table/universities-table.component';
import { PeriodicElement } from '../../models/periodic-element';

import * as countries from "countries-list";

@Component({
  selector: 'app-universities-list-page',
  templateUrl: './universities-list-page.component.html',
  styleUrls: ['./universities-list-page.component.scss']
})
export class UniversitiesListPageComponent implements OnInit, OnDestroy {

  private destroyed$ = new ReplaySubject<boolean>();

  public country: string = '';

  public themeIsDark: boolean = false;

  public suggestedResults: string[] = [];

  public countries: string[] = [];

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
    this.getCountries();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  getCountries(){
    for (const [key, value] of Object.entries(countries.countries)) {
      this.countries.push(value.name);
    }
  }

  getUniversities(){
    this.universityService.getUniversities(this.country.toLowerCase()).pipe(takeUntil(this.destroyed$)).subscribe(result => {
      this.universitiesTableComponent.dataSource.data = result;
    });
  }

  filterCountries(value: string){
    this.suggestedResults = [];

    if (value.length > 1){
      this.countries.forEach(country => {
        if (country.toLowerCase().includes(value.toLowerCase())){
          this.suggestedResults.push(country);
        }
      });
    }
  }

  changeTheme(event: boolean){
    this.themeIsDark = event;
    this.universitiesTableComponent.themeIsDark = event;
  }
}
