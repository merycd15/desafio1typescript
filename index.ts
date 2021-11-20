
enum TipoOperacion{
  Debito,
  Credito
}

//interface
interface Transaccion{
  id:number;
  cuenta:number;
  fecha:string;
  operacion: TipoOperacion;
  monto:number
}


let transaccion: Transaccion = {
  id: 123,
  cuenta:2000,
  fecha:'2021-11-12',
  operacion:TipoOperacion.Credito,
  monto:100.01
}

transaccion.operacion = TipoOperacion.Debito;

class Cuenta{
  constructor(
      public id: number,
      public cuit: string,
      public saldo: number,
      public transacciones: Transaccion[]
  ){}

  agregarTransaccion(transaccion: Transaccion){
      if(transaccion.operacion == TipoOperacion.Debito){
          this.saldo = this.saldo-transaccion.monto;
      }else{
          this.saldo = this.saldo+transaccion.monto;
      }
      this.transacciones.push(transaccion);
  }
}

const cuenta = new Cuenta(1,'20-12345678-3', 100, []);

cuenta.agregarTransaccion({
  id:11, cuenta:1, fecha:'2021-11-19', operacion:TipoOperacion.Debito, monto:10
})

cuenta.agregarTransaccion({
  id:11, cuenta:1, fecha:'2021-11-19', operacion:TipoOperacion.Credito, monto:100
})

console.log('Estado actual de la ', cuenta);
