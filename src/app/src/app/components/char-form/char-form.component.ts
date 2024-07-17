import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharsService } from '../../services/chars.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-char-form',
  templateUrl: './char-form.component.html',
  styleUrl: './char-form.component.css'
})
export class CharFormComponent implements OnInit, OnDestroy {

  char = '';

  constructor(
    public charService: CharsService,
    public toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.toaster.info('Página de form aberto!');
  }

  ngOnDestroy(): void {
    this.toaster.show('Página de form fechada!');
  }

  onSubmit(){
    console.log(this.char);
    // this.charService.addTodo(this.char);
    this.char = '';
  }

}
