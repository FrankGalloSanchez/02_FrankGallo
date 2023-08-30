import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter = 0;                 // El valor del contador
  activeDecrease = false;      // Controla si el botón de disminución está activo o no

  increase() {
    this.counter++;            // Incrementa el contador
    this.updateActiveDecrease(); // Actualiza el estado del botón de disminución
  }

  decrease() {
    if (this.counter > 0) {     // Solo disminuye si el contador es mayor que 0
      this.counter--;          // Disminuye el contador
      this.updateActiveDecrease(); // Actualiza el estado del botón de disminución
    }
  }

  inactiveDecrease() {
    this.activeDecrease = !this.activeDecrease; // Activa/desactiva el botón de disminución
  }

  private updateActiveDecrease() {
    this.activeDecrease = this.counter === 0; // Actualiza el estado del botón de disminución basado en el contador
  }
}
