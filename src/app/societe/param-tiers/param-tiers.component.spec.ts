import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamTiersComponent } from './param-tiers.component';

describe('ParamTiersComponent', () => {
  let component: ParamTiersComponent;
  let fixture: ComponentFixture<ParamTiersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamTiersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
