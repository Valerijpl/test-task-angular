import { Component, OnDestroy } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { ReplaySubject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'angular-test-task';

  protected themeIsDark: boolean = false;

  private subscription: Subscription;

  private destroyed$ = new ReplaySubject<boolean>();

  constructor(private themeService: ThemeService) {
    this.subscription = this.themeService.getSelectedTheme().pipe(takeUntil(this.destroyed$)).subscribe(value => {
      if (value != this.themeIsDark){
        this.themeIsDark = value;
      }
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
