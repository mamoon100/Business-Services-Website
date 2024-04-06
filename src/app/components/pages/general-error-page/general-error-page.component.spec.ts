import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralErrorPageComponent } from './general-error-page.component';

describe('GeneralErrorPageComponent', () => {
  let component: GeneralErrorPageComponent;
  let fixture: ComponentFixture<GeneralErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralErrorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
