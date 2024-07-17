import { Injectable } from '@angular/core';
import { Chars } from '../models/Chars';

@Injectable({
  providedIn: 'root'
})
export class CharsService {

  charList: Chars[] = [
    {
      id: 1,
      name: 'Jin Kazama',
      style: 'Karate',
      country: 'Japão'
    },
    {
      id: 2,
      name: 'Kazuya Mishima',
      style: 'Karate',
      country: 'Japão'
    },
    {
      id: 3,
      name: 'King',
      style: 'Pro Wrestling',
      country: 'Mexico'
    },
    {
      id: 4,
      name: 'Marshall Law',
      style: 'Kung Fu',
      country: 'USA'
    }
  ];

  constructor() { }

  addChar(newChar: Chars): void {
    newChar.id = this.charList.length ? Math.max(...this.charList.map(char => char.id)) + 1 : 1;
    this.charList.push(newChar);
  }

  removeChar(id: number): void {
    this.charList = this.charList.filter(char => char.id !== id);
  }

}
