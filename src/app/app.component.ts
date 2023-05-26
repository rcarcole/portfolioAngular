import { Component } from '@angular/core';
import { faHtml5, faCss3, faJs, faReact, faNode, faPhp, faLaravel, faWindows, faLinux } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolioAngular';
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJs;
  faReact = faReact;
  faNode = faNode;
  faPhp = faPhp;
  faLaravel = faLaravel;
  faDatabase = faDatabase;
  faWindows = faWindows;
  faLinux = faLinux;
}
