import { Component } from '@angular/core';
import { TemperatureComponent } from './temperature/temperature';
import { RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemperatureComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'temperature-converter';
}
