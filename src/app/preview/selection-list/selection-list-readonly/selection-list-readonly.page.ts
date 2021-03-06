import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-selection-list-readonly',
  templateUrl: './selection-list-readonly.page.html',
})
export class SelectionListReadonlyPage {
  constructor(cdr: ChangeDetectorRef, private ds: DemoService) {
  }
  getOneBook(){
    return this.ds.generateBooks().slice(0,1)
  }
}
