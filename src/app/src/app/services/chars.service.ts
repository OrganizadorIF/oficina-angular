import { Injectable } from '@angular/core';
import { Chars } from '../models/Chars';

@Injectable({
  providedIn: 'root'
})
export class CharsService {

  charList: Chars[] = [
    {
      id: 1,
      name: 'Dante',
      fav_color: 'Red',
      weaponsNum: 8
    },
    {
      id: 2,
      name: 'Vergil',
      fav_color: 'Aqua',
      weaponsNum: 3
    },
    {
      id: 3,
      name: 'Nero',
      fav_color: 'Blue',
      weaponsNum: 2
    },
    {
      id: 4,
      name: 'V',
      fav_color: 'Black',
      weaponsNum: 4
    }
  ];

  constructor() { }

}
