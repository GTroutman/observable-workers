import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable-workers';

  runWorker() {
    if (typeof Worker !== 'undefined') {
      // Note: 2nd arg is different to the tutorial at this page ({ type: 'module'} does not work.)
      // https://dev.to/zakhenry/observable-webworkers-with-angular-8-4k6
      // Got the correct version from scaffold code generated from running 'ng generate web-worker app'
      // see: https://angular.io/guide/web-worker
      const worker = new Worker(new URL('./demo.worker', import.meta.url));

      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      
      worker.postMessage('hello');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
}
