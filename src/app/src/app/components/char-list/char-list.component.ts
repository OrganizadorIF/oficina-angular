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
    console.log(this.checkVar);
    if(this.checkVar == false) {
      this.toastr.success('Blink!')
      this.checkVar = true;
    }
    else {
      this.toastr.warning('Katiau!')
      this.checkVar = false;
    }
  }

}
