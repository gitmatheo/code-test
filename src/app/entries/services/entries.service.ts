import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { normalizeQueryParams } from 'src/app/shared/helpers';
import { Entries } from '../interfaces/entries.interface';

@Injectable({
  providedIn: 'root',
})
export class EntriesService {
  constructor(private http: HttpClient) {}

  getEntries(params: {
    limit: string;
    before?: string;
    after?: string;
    show?: string;
  }): Observable<Entries> {
    return this.http
      .get(
        `https://www.reddit.com/r/sweden.json${normalizeQueryParams(params)}`
      )
      .pipe(
        mergeMap((list: any) => {
          return of({
            after: list.data.after,
            before: list.data.before,
            data: list.data.children.map((item: any) => {
              return this.mapResponseToEntriesList(item.data);
            }),
          });
        })
      );
  }

  private mapResponseToEntriesList(item: any) {
    return {
      thumbnail: item.thumbnail,
      created: item.created,
      num_comments: item.num_comments,
      author: item.author,
      score: item.score,
      title: item.title,
      selftext: item.selftext,
      id: item.id,
      name: item.name,
    };
  }
}
