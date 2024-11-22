import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsTableComponent } from './modules/dashboard/components/cars-table/cars-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CarsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-wash';
}
