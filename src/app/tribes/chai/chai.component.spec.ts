import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaiComponent } from './chai.component';

describe('ChaiComponent', () => {
  let component: ChaiComponent;
  let fixture: ComponentFixture<ChaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
