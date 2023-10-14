import { Response } from "src/publics/Response.dto";
import { Observable } from "rxjs";

export interface IPersonaService<T>{


    getAll(): Observable<Response<T[]>>;

    getById(id: number): Observable<Response<T>>;

    createOrUpdate(entity: T): Observable<Response<T>>;

    deleteById(id: number): Observable<Response<T>>;


}

// crear el dto y la interfaz faltante

// crear los componente de los dto y enlazarlos (html, css, ts, spects.ts)

// agregar bootstrap 

// crear una interfaz (diseño) que tenga un formulario para capturar los datos necesarios para el registro y una tablla para mostrar los datos