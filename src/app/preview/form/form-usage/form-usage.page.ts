import { AXBasePageComponent, AXClickEvent, AXFormComponent, AXToastService, AX_TIME_FORMAT } from '@acorex/components';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DemoService } from '../../demo.service';
@Component({
  selector: 'app-form-usage',
  templateUrl: './form-usage.page.html',
})
export class FormUsagePage extends AXBasePageComponent  implements OnInit {
  firstname: string;
  lastname: string;
  mobile: string;
  email: string;
  @ViewChild(AXFormComponent)
  form: AXFormComponent;
  constructor(private _elRef:ElementRef,private cdr: ChangeDetectorRef, private ds: DemoService) {
    super(_elRef,cdr)
    }
  ngOnInit() {}
  _handleSubmitClick() {
    this.form.validate().then(c => {
        this.close({
            firstname: this.firstname,
            lastname: this.lastname,
            mobile: this.mobile,
            email: this.email
        });
    })
} 
}
