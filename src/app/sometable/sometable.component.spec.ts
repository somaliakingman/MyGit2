import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SometableComponent } from './sometable.component';

describe('SometableComponent', () => {
  let component: SometableComponent;
  let fixture: ComponentFixture<SometableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SometableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SometableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
