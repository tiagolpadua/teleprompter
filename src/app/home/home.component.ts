import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  url = 'https://gist.githubusercontent.com/tiagolpadua/cc804c7912379cb598c356f35d9a75ab/raw/45be8b9224aeefd16bb1365285253ff797820004/Apresenta%25C3%25A7%25C3%25A3o%2520Teste';
  // url = '';

  constructor(private dataService: DataServiceService, private router: Router) {
  }

  telepromt() {
    this.dataService.load(this.url)
      .subscribe(() => this.router.navigate(['teleprompt']));
  }

}
