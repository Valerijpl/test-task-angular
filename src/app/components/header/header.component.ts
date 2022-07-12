import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public themeIsDark: boolean = false;

  constructor(private themeService: ThemeService) {

  }

  ngOnInit(): void {

  }

  changeTheme(){
    this.themeService.updateThemeSelection(this.themeIsDark);
  }
}
