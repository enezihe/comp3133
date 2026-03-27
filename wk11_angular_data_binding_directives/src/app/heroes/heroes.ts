import { Component } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { RemoveSpacesPipe } from '../remove-spaces-pipe';
import { InputFormat } from '../input-format';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
  imports: [NgFor, NgIf, UpperCasePipe, FormsModule, RemoveSpacesPipe, InputFormat]
})
export class Heroes {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  clearInput(): void {
    const input = document.querySelector('[inputFormat]') as HTMLInputElement;
    if (input) input.value = '';
  }
}
