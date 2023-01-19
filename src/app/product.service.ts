import { Injectable } from '@angular/core';
import { Http, Response } from '@Angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators'

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  private _albumUrl: string = '../assets/album.json';

  getAlbum(id: number): Observable<any> {
   return this._http.get(this._albumUrl).map(response => response.json());
  }
}
