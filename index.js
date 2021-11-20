"use strict";
var TipoOperacion;
(function (TipoOperacion) {
    TipoOperacion[TipoOperacion["Debito"] = 0] = "Debito";
    TipoOperacion[TipoOperacion["Credito"] = 1] = "Credito";
})(TipoOperacion || (TipoOperacion = {}));
let transaccion = {
    id: 123,
    cuenta: 2000,
    fecha: '2021-11-12',
    operacion: TipoOperacion.Credito,
    monto: 100.01
};
transaccion.operacion = TipoOperacion.Debito;
class Cuenta {
    constructor(id, cuit, saldo, transacciones) {
        this.id = id;
        this.cuit = cuit;
        this.saldo = saldo;
        this.transacciones = transacciones;
    }
    agregarTransaccion(transaccion) {
        if (transaccion.operacion == TipoOperacion.Debito) {
            this.saldo = this.saldo - transaccion.monto;
        }
        else {
            this.saldo = this.saldo + transaccion.monto;
        }
        this.transacciones.push(transaccion);
    }
}
const cuenta = new Cuenta(1, '20-12345678-3', 100, []);
cuenta.agregarTransaccion({
    id: 11, cuenta: 1, fecha: '2021-11-19', operacion: TipoOperacion.Debito, monto: 10
});
cuenta.agregarTransaccion({
    id: 11, cuenta: 1, fecha: '2021-11-19', operacion: TipoOperacion.Credito, monto: 100
});
console.log('Estado actual de la ', cuenta);
