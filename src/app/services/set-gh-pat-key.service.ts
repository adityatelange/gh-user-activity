import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetGhPatKeyService {

  constructor() { }

  get_pat() {
    return localStorage.getItem('gh_pat')
  }

  set_pat(input_key: string) {
    localStorage.setItem('gh_pat', input_key)
  }
}
