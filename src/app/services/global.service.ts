import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private uri: string = environment.restAPI; // URL base de la API

  // Headers comunes para las peticiones
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // Método POST genérico para enviar datos y recibir una respuesta tipada
  // Param:
  // - body: Objeto a enviar en la petición
  // - url: Dirección del servicio REST
  public post<T, R>(body: T, url: string): Observable<R> {
    return this.http
      .post<R>(`${this.uri}${url}`, body, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Método GET genérico para obtener datos
  // Param:
  // - url: Dirección del servicio REST
  public get<R>(url: string): Observable<R> {
    return this.http
      .get<R>(`${this.uri}${url}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  // Manejo centralizado de errores HTTP
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Error desconocido';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // El backend devolvió un código de error
      errorMessage = `Código de error: ${error.status}, mensaje: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
