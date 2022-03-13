import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EntriesListComponent } from './entries-list.component';

describe('EntriesListComponent', () => {
  let component: EntriesListComponent;
  let fixture: ComponentFixture<EntriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntriesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPrevious when previous button is clicked', fakeAsync(() => {
    spyOn(component, 'getPrevious');

    let button = fixture.debugElement.query(By.css('#previous-btn'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.getPrevious).toHaveBeenCalled();
  }));

  it('should call getNext when Next button is clicked', fakeAsync(() => {
    spyOn(component, 'getNext');

    let button = fixture.debugElement.query(By.css('#next-btn'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.getNext).toHaveBeenCalled();
  }));
});
