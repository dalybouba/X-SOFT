import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingParamComponent } from './processing-param.component';

describe('ProcessingParamComponent', () => {
  let component: ProcessingParamComponent;
  let fixture: ComponentFixture<ProcessingParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
