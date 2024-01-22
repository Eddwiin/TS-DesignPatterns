import { Component } from '@angular/core';
import { Point, PointFactory } from './Point/point';
import { ReplaceableThemeFactory, TrackingThemeFactory } from './Theme/theme';

@Component({
  selector: 'app-point-factory',
  standalone: true,
  imports: [],
  templateUrl: './point-factory.component.html',
  styleUrl: './point-factory.component.scss'
})
export class PointFactoryComponent {

  ngOnInit() {
    // const point = PointFactory.newPolarPoint(1.0, Math.PI / 2);

    this.getFactoryTheme();
  }

  getFactoryTheme() {
    const factory = new TrackingThemeFactory();
    factory.createTheme(false);
    factory.createTheme(true);
    factory.createTheme(true);

    const factory2 = new ReplaceableThemeFactory();
    const magicTheme = factory2.createTheme(true);
    console.log(magicTheme.value.bgColor);

    factory2.replaceTheme(false);
    console.log(magicTheme.value.bgColor)
  }
}
