import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  imports: [],
  templateUrl: './click-counter.component.html',
  styleUrl: './click-counter.component.css'
})
export class ClickCounterComponent {
count = signal<number>(0)

  clickHandler() {
    let currentCount = this.count()
    this.count.set(currentCount + 1)
  }

}


