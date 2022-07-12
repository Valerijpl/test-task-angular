import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesListPageComponent } from './Universities-list-page.component';

describe('UniversitiesListPageComponent', () => {
  let component: UniversitiesListPageComponent;
  let fixture: ComponentFixture<UniversitiesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitiesListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitiesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
