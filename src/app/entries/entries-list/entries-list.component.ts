import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Entries, Entry } from '../interfaces/entries.interface';

@Component({
  selector: 'app-entries-list',
  templateUrl: './entries-list.component.html',
  styleUrls: ['./entries-list.component.scss'],
})
export class EntriesListComponent {
  @Input() entries!: Entries;
  @Output() entrySelected = new EventEmitter<Entry>();
  @Output() loadPrevious = new EventEmitter<Entry>();
  @Output() loadNext = new EventEmitter<Entry>();
  @Output() changeLimit = new EventEmitter<string>();

  getEntries($event: Event) {
    this.changeLimit.emit(($event.target as HTMLSelectElement)?.value);
  }

  getPrevious() {
    this.loadPrevious.emit(this.entries.data[0]);
  }

  getNext() {
    this.loadNext.emit(this.entries.data[this.entries.data.length - 1]);
  }

  selectEntry(entry: Entry) {
    this.entrySelected.emit(entry);
  }
}
