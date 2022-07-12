import { Injectable } from '@angular/core';
import { switchMap, map, share, catchError } from 'rxjs/operators';
import { Observable, of, EMPTY, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public themeIsDarkSource: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  public updateThemeSelection(value: boolean){
    this.themeIsDarkSource.next(value);
  }

  public getSelectedTheme(): Observable<boolean> {
    return this.themeIsDarkSource.asObservable();
  }
}
