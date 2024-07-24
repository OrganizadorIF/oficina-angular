import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chars } from '../models/Chars';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharsService {

  private apiUrl = 'https://viacep.com.br/ws/';

  charList: Chars[] = [
    {
      id: 1,
      name: 'Jin Kazama',
      style: 'Karate',
      country: 'Japão',
      cpf: '098.785.578-00',
      cep: '37890-000',
      city: 'Muzambinho'
    },
    {
      id: 2,
      name: 'Kazuya Mishima',
      style: 'Karate',
      country: 'Japão',
      cpf: '098.785.578-01',
      cep: '01153-000',
      city: 'São Paulo'
    },
    {
      id: 3,
      name: 'King',
      style: 'Pro Wrestling',
      country: 'Mexico',
      cpf: '098.785.578-02',
      cep: '05407-002',
      city: 'Rio de Janeiro'
    },
    {
      id: 4,
      name: 'Marshall Law',
      style: 'Kung Fu',
      country: 'USA',
      cpf: '098.785.578-03',
      cep: '37890-000',
      city: 'Muzambinho'
    }
  ];

  constructor(private http: HttpClient) { }

  addChar(newChar: Chars): void {
    newChar.id = this.charList.length ? Math.max(...this.charList.map(char => char.id)) + 1 : 1;
    this.charList.push(newChar);
  }

  removeChar(id: number): void {
    this.charList = this.charList.filter(char => char.id !== id);
  }

  buscarCep(cep: string): Observable<any> {
    console.log(cep);
    const url = `${this.apiUrl}/${cep}/json/`;
    return this.http.get<any>(url);
  }

}
