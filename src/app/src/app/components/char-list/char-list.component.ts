import { Component } from '@angular/core';
import { CharsService } from '../../services/chars.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrl: './char-list.component.css'
})
export class CharListComponent {

  checkVar: boolean = false;

  public constructor(
    public CharsService: CharsService,
    public toastr: ToastrService
  ) { }

  OnClick() {
    if(this.checkVar == false) {
      this.toastr.success('Conteúdo visível!')
      this.checkVar = true;
    }
    else {
      this.toastr.warning('Conteúdo escondido!')
      this.checkVar = false;
    }
  }

  onDelete(id: number): void {
    this.CharsService.removeChar(id);
    this.toastr.success('Personagem excluído com sucesso!');
  }

}
