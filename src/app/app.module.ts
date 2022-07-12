import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { UniversityService } from './services/university/university.service';
import { UniversitiesListPageComponent } from './pages/universities-list-page/universities-list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UniversitiesTableComponent } from './components/universities-table/universities-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import {CdkDetailRowDirective} from './directives/cdk-detail-row.directive';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { FormsModule } from '@angular/forms';
import { ThemeService } from './services/theme/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    UniversitiesListPageComponent,
    UniversitiesTableComponent,
    HeaderComponent,
    FooterComponent,
    CdkDetailRowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    DragDropModule,
    FormsModule,
    MatRippleModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    UniversityService,
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
