import { Component } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
})
export class BaseComponent {
  title = 'Roots rest.';
  constructor(
    private pageTitleService: PageTitleService
  ) {
    pageTitleService.title
      .subscribe(title => {
        this.title = title;
      });
  }
}