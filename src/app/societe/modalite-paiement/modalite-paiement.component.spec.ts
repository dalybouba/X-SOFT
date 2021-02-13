import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalitePaiementComponent } from './modalite-paiement.component';

describe('ModalitePaiementComponent', () => {
  let component: ModalitePaiementComponent;
  let fixture: ComponentFixture<ModalitePaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalitePaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalitePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
