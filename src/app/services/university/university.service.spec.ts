import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UniversityService } from './university.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UniversityService', () => {
  let service: UniversityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule
      ]
    });
    service = TestBed.inject(UniversityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
