import { TestBed } from '@angular/core/testing';

import { PokemonImagenService } from './pokemon-imagen.service';

describe('PokemonImagenService', () => {
  let service: PokemonImagenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonImagenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
