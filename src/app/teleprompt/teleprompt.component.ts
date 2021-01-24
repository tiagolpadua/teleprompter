import { Component, HostListener, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-teleprompt',
  templateUrl: './teleprompt.component.html',
  styleUrls: ['./teleprompt.component.css']
})
export class TelepromptComponent implements OnInit {

  lines: string[];

  curline = 0;

  constructor(private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.lines = (this.dataService.getData() || '').split('\n');
    this.lines.unshift('');
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    console.log(event.key);
    if (event.key === "PageUp" && this.curline > 0) {
      this.curline--;
      event.preventDefault();
    }

    if (event.key === "PageDown" && this.curline < (this.lines.length - 1)) {
      this.curline++;
      event.preventDefault();
    }

  }

}
