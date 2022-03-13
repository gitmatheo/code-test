import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from '../shared/services/modal.service';
import {
  Entries,
  EntriesQueryParams,
  Entry,
} from './interfaces/entries.interface';
import { EntriesService } from './services/entries.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.scss'],
})
export class EntriesComponent implements OnInit {
  entries$!: Observable<Entries>;
  selectedEntry!: Entry;
  limit: string = '5';
  firstMsg = true;

  constructor(
    public entriesService: EntriesService,
    private modal: ModalService
  ) {}

  ngOnInit(): void {
    this.loadEntries({ limit: this.limit });
    this.modal.register('entryDetails');
  }

  ngOnDestroy(): void {
    this.modal.unregister('entryDetails');
  }

  loadEntries(params: EntriesQueryParams) {
    this.entries$ = this.entriesService.getEntries(params);
  }

  loadPrevious(entry: Entry): void {
    this.loadEntries({
      count: 1000,
      limit: this.limit,
      before: entry?.name,
    });
  }

  loadNext(entry: Entry): void {
    this.loadEntries({
      count: 1000,
      limit: this.limit,
      after: entry?.name,
    });
  }

  changeLimit(limit: string): void {
    this.limit = limit;
    this.loadEntries({ limit });
  }

  selectEntry(entry: Entry): void {
    this.selectedEntry = entry;
    this.modal.toggleModal('entryDetails');
  }

  hideMsg() {
    this.firstMsg = false;
  }
}
