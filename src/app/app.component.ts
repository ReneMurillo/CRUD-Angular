import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular CRUD';
  msg: string = '';

  empleados = [
    {nombre: 'Rene', posicion: 'Ingeniero de Software', email: 'rene.murillo95@hotmail.com'},
    {nombre: 'Alfredo', posicion: 'Ingeniero en Sistemas', email: 'rene.murillor@gmail.com'},
    {nombre: 'Murillo', posicion: 'Desarrollador de Software', email: 'rene.murillor@outlook.com'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate: boolean = true;

  agregarEmpleado():void{
    this.empleados.push(this.model);
    this.msg = 'El registro se guardó correctamente';
  }

  eliminarEmpleado(i):void{
   let respuesta: boolean = confirm('¿Está seguro de eliminar este registro de empleado?');
   if(respuesta){
     this.empleados.splice(i, 1);
     this.msg = 'El registro se eliminó correctamente';
   }
  }

  myValue;
  editarEmpleado(i):void{
    this.model2.nombre = this.empleados[i].nombre;
    this.model2.posicion = this.empleados[i].posicion;
    this.model2.email = this.empleados[i].email;
    this.hideUpdate = false;
    this.myValue = i;
  }

  actualizarEmpleado():void{
    let i = this.myValue;
    for(let j=0; j<this.empleados.length; j++){
      if(i==j){
        this.empleados[i] = this.model2;
        this.model2 = {};
        this.msg = 'El registro se actualizó correctamente';
        this.hideUpdate = true;
      }
    }
  }

  closeAlert():void{
    this.msg = '';
  }
}
