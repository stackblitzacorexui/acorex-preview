import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './alert.routes';

import { AXAlertModule, AXButtonModule, AXEditorDecoratorModule, AXIconModule } from '@acorex/components';

import { AlertAdditionalPage } from './alert-additional/alert-additional.page';
import { AlertAppearancePage } from './alert-appearance/alert-appearance.page';
import { AlertButtonsPage } from './alert-buttons/alert-buttons.page';
import { AlertMethodsPage } from './alert-methods/alert-methods.page';
import { AlertSuffixPage } from './alert-suffix/alert-suffix.page';
import { AlertUsagePage } from './alert-usage/alert-usage.page';
import { AlertLockPage } from './alert-lock/alert-lock.page';

const MODULES: any = [
    AXAlertModule,
    AXIconModule,
    AXEditorDecoratorModule,
    AXButtonModule,
    
]

const PAGES: any = [
    AlertUsagePage,
    AlertAdditionalPage,
    AlertAppearancePage,
    AlertButtonsPage,
    AlertMethodsPage,
    AlertSuffixPage,
    AlertLockPage

]


@NgModule({
    declarations: [...PAGES],
    imports: [CommonModule, RouterModule.forChild(routes),...MODULES],
    exports: [...PAGES],
    providers: [],
})
export class AlertModule { }