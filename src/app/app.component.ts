import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointFactoryComponent } from './factory/point-factory/point-factory.component';
import { PersonComponent } from './person/person.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PointFactoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'designPatterns';
}
