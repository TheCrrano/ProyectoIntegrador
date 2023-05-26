import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaItemsComponent } from './mesa-items.component';

describe('MesaItemsComponent', () => {
  let component: MesaItemsComponent;
  let fixture: ComponentFixture<MesaItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesaItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
