import { Component } from '@angular/core';

@Component({
  selector: 'app-home-p',
  templateUrl: './home-p.component.html',
  styleUrl: './home-p.component.css'
})
export class HomePComponent {

  selectedButton: string = 'Episodes';

  selectButton(button: string): void {
    this.selectedButton = button;
  }


}
