import { Component, OnInit } from '@angular/core';
import { Person, PersonBuilder, PersonInfoBuilder } from './PersonBuilder/PersonBuilder';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent implements OnInit {

  ngOnInit() {
    this.loadPersonBuilder();
  }

  loadPersonBuilder() {
    const person = PersonBuilder.build.setName('MyTest').setEmail('Email').setPassword('azerty').setUsername('edouard').setAge(12);

    console.log(person);
  }
}
