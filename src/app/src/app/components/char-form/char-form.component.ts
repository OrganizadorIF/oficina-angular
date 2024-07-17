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

  constructor(
    public charService: CharsService,
    public toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.toaster.info('Página de form aberto!');
  }

  ngOnDestroy(): void {
    this.toaster.warning('Página de form fechada!');
  }

  onSubmit(form: NgForm){
    if (this.name && this.style && this.country) {
      const newChar: Chars = {
        id: 0, // O ID será atribuído pelo serviço
        name: this.name,
        style: this.style,
        country: this.country
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
  }

}
