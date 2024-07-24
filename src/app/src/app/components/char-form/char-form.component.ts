import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharsService } from '../../services/chars.service';
import { ToastrService } from 'ngx-toastr';
import { Chars } from '../../models/Chars';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-char-form',
  templateUrl: './char-form.component.html',
  styleUrl: './char-form.component.css'
})
export class CharFormComponent implements OnInit {

  name = '';
  style = '';
  country = '';
  cpf = '';
  cep = '';
  city = '';
  dadosCep: any;

  constructor(
    public charService: CharsService,
    public toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.toaster.info('Página de form aberto!');
  }

  // ngOnDestroy(): void {
  //   this.toaster.warning('Página de form fechada!');
  // }

  onSubmit(form: NgForm){
    if (this.name && this.style && this.country) {
      const newChar: Chars = {
        id: 0, // O ID será atribuído pelo serviço
        name: this.name,
        style: this.style,
        country: this.country,
        cpf: this.cpf,
        cep: this.cep,
        city: this.city
      };
      this.charService.addChar(newChar);
      this.toaster.success('Personagem adicionado com sucesso!');
      this.resetForm();
      form.resetForm();
    } else {
      this.toaster.error('Por favor, preencha todos os campos!');
    }
  }

  private resetForm(): void {
    this.name = '';
    this.style = '';
    this.country = '';
    this.cpf = '';
    this.cep = '';
    this.city = '';
  }

  buscarInformacoesCep() {
    console.log(this.cep); console.log(this.cep.length);
    var str = this.cep.replace('-', '');
    var str = str.replace('_', '');
    if (this.cep && str.length === 8) { // Validar se o CEP tem 8 caracteres (somente números)
      this.charService.buscarCep(this.cep).subscribe(
        (data) => {
          this.dadosCep = data;
          console.log('Dados do CEP:', this.dadosCep);
          this.city = this.dadosCep.localidade;
        },
        (error) => {
          console.error('Erro ao buscar CEP:', error);
        }
      );
    } else {
      console.warn('CEP inválido.');
    }
  }

}
