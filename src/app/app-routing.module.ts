import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesListPageComponent } from './pages/universities-list-page/universities-list-page.component';

export const routes: Routes = [
  { path: '', component: UniversitiesListPageComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
