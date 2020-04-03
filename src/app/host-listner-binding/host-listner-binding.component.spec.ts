import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListnerBindingComponent } from './host-listner-binding.component';

describe('HostListnerBindingComponent', () => {
  let component: HostListnerBindingComponent;
  let fixture: ComponentFixture<HostListnerBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostListnerBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostListnerBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
