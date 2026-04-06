import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: true,
  templateUrl: './students.component.html'
})
export class StudentsComponent {

  title = "My List of Students";

  getTitle() {
    return this.title;
  }

  getCurrentDate() {
    return new Date();
  }

}
