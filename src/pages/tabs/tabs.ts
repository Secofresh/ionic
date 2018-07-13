import { Component } from '@angular/core';

import { PendingComponent } from '../pending/pending.component';
import { DoneComponent } from '../done/done.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingComponent;
  tab2Root = DoneComponent;

  constructor() {

  }
}
