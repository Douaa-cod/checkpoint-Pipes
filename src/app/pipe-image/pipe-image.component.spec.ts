import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeImageComponent } from './pipe-image.component';

describe('PipeImageComponent', () => {
  let component: PipeImageComponent;
  let fixture: ComponentFixture<PipeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
