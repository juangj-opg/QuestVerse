import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  /* countReq: El interceptor va a recibir varias request en la mayoría de vistas, por lo que es necesario 
   un contador que nos de un false en el momento en el que vaya por la última, es decir:
   Si recibimos 5 peticiones -> start() hace un count 1,2,3,4,5 y end() un count negativo
    5,4,3,2,1 a medida que se van resolviendo, hasta que si al llegar el count a 0 en el
    end() llamamos al hide(), que lanza un false al spinner y se oculta */

  countReq = 0;

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    /*     
    Este header se pasa desde el || service ||, automáticamente
    ignora el spinner, Ejemplo de como excluir tu método del spinner:
    CREAR UNA CONSTANTE POR CADA MÉTODO QUE QUIERAS IGNORAR

    getPersonas(){
    const headers = new HttpHeaders().set(InterceptorSkipHeader, ""); 
    this.api.get/post( CreateURL(MiURL), { headers } ) , etc ....;
    }
    */
    this.start(request.headers);
    return next.handle(request).pipe(finalize(() => this.end()));
  }

  start(headers: HttpHeaders) {
    /* Al entrar como mínimo una req, mostramos spinner y aumentamos el count
       por cada vez que entra una. */
    this.countReq++;
    if (this.countReq === 1) this.loaderService.show();
  }

  end() {
    /* Vamos restando el count a medida que las req se van resolviendo,
       al llegar a 0 el spinner se esconde. */
    this.countReq--;
    if (this.countReq === 0) this.loaderService.hide();
  }
}
