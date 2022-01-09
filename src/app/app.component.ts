import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="ax-max-w-8xl ax-mx-auto ax-p-4 sm:ax-px-6 md:ax-px-8 ax-overflow-auto ax-h-full">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {
}
