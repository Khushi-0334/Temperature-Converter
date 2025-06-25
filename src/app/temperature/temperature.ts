import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperature.html',
  styleUrls: ['./temperature.css']
})
export class TemperatureComponent {
  celsius: number | null = null;
  fahrenheit: number | null = null;

  convertToFahrenheit() {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9) / 5 + 32;
    } else {
      this.fahrenheit = null;
    }
  }

  convertToCelsius() {
    if (this.fahrenheit !== null) {
      this.celsius = ((this.fahrenheit - 32) * 5) / 9;
    } else {
      this.celsius = null;
    }
  }

  clearAll() {
    this.celsius = null;
    this.fahrenheit = null;
  }
}
