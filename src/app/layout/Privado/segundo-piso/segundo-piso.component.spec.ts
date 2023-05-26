import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoPisoComponent } from './segundo-piso.component';

describe('SegundoPisoComponent', () => {
  let component: SegundoPisoComponent;
  let fixture: ComponentFixture<SegundoPisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoPisoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoPisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
