import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-tab-row',
  templateUrl: './tab-row.component.html'
})
export class TabRowComponent {
  @Input() names: string[];
  @Input() activeList: string;
  @Output() onSelectTab = new EventEmitter<string>();

  constructor() {}

  selectTab(name: string): void {
    this.onSelectTab.emit(name);
  }
}
