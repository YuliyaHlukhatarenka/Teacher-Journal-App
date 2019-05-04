import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ActionsEffects } from './actions.effects';

describe('ActionsEffects', () => {
  let actions$: Observable<any>;
  let effects: ActionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ActionsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ActionsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
