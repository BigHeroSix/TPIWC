//var response = require("../boundary/MarcaResourceClient");
//import mocha from "./resources/mocha.js";
//import chai from "./resources/chai.js";
import MarcaResourceClient from "../boundary/MarcaResourceClient.js";
import EquipoResourceClient from "../boundary/EquipoResourceClient.js";
import OrdenTrabajoDetalleEstadoPasoResourceClient from "../boundary/OrdenTrabajoDetalleEstadoPasoResourceClient.js";
const expect = chai.expect;
var assert = chai.assert;
var response = new MarcaResourceClient();
var responseEquipo = new EquipoResourceClient();
var responseOTDEP = new OrdenTrabajoDetalleEstadoPasoResourceClient();
let promise;
let promiseEquipo;
let promiseOTDEP;
mocha.setup("bdd");

describe('Pruebas para MarcaResourceClient', () => {
    describe('findAll()', () => {
        it('Devuelve status 200', async () => {
            promise = await response.findAll();
            assert.equal(promise.status, 200)
        });
        it('Debe devolver un json', async () => {
            promise = await response.findAll();
            let promiseJSON = await promise.json();
            assert.equal(typeof (promiseJSON), "object");
        });
        it('Numero datos solicitado igual al esperado', async () => {
            promise = await response.findAll();
            let promiseJSON = await promise.json();
            assert.lengthOf(promiseJSON, "15");
        });
    });
    describe('findById(idMarca)', () => {
        it('Devuelve status 200', async () => {
            promise = await response.findById(1);
            assert.equal(promise.status, 200)
        });
        it('Debe devolver un json', async () => {
            promise = await response.findById(1);
            let promiseJSON = await promise.json();
            assert.equal(typeof (promiseJSON), "object");
        });
        it('ID igual a solicitado', async () => {
            promise = await response.findById(1);
            let promiseJSON = await promise.json();
            assert.equal(promiseJSON.idMarca, "1");
        });
    });
    describe('findByRange(first,pagesize)', () => {
        it('Devuelve status 200', async () => {
            promise = await response.findByRange(1, 5);
            assert.equal(promise.status, 200)
        });
        it('Debe devolver un json', async () => {
            promise = await response.findByRange(1, 5);
            let promiseJSON = await promise.json();
            assert.equal(typeof (promiseJSON), "object");
        });
        it('Rango solicitado igual al devuelto', async () => {
            promise = await response.findByRange(1, 5);
            let promiseJSON = await promise.json();
            assert.lengthOf(promiseJSON, "5");
        });
    });
    describe('findByNameLike(char)', () => {
        it('Devuelve status 200', async () => {
            promise = await response.findByNameLike("p");
            assert.equal(promise.status, 200)
        });
        it('Debe devolver un json', async () => {
            promise = await response.findByNameLike("p");
            let promiseJSON = await promise.json();
            assert.equal(typeof (promiseJSON), "object");
        });
        it('Numero de coincidencia correctas', async () => {
            promise = await response.findByNameLike("p");
            let promiseJSON = await promise.json();
            assert.lengthOf(promiseJSON, "4");
        });
    });
    describe('count()', () => {
        it('Devuelve status 200', async () => {
            promise = await response.count();
            assert.equal(promise.status, 200)
        });
        it('Debe devolver un json', async () => {
            promise = await response.count();
            assert.equal(typeof (promise), "object");
        });
        it('Numero de resultados correcto', async () => {
            promise = await response.count();
            let promiseJSON = await promise.json();
            assert.equal(promiseJSON, "15");
        });
    });

});

describe('Pruebas para EquipoResourceClient', () => {
    describe('findDetalle(idEquipo)', () => {
        it('Devuelve status 200', async () => {
            promiseEquipo = await responseEquipo.findDetalle(1);
            assert.equal(promiseEquipo.status, 200)
        });
        it('Debe devolver un json', async () => {
            promiseEquipo = await responseEquipo.findDetalle(1);
            let promiseJSON = await promiseEquipo.json();
            assert.equal(typeof (promiseJSON), "object");
        });
        it('Devuelve numero detalle correcto de Equipo con Id solicitado', async () => {
            promiseEquipo = await responseEquipo.findDetalle(1);
            let promiseJSON = await promiseEquipo.json();
            assert.lengthOf(promiseJSON, "3");
        });
    });
    describe('historial(idEquipo)', () => {
        it('Devuelve status 200', async () => {
            promiseEquipo = await responseEquipo.historial(1);
            assert.equal(promiseEquipo.status, 200)
        });
        it('Debe devolver un json', async () => {
            promiseEquipo = await responseEquipo.historial(1);
            let promiseJSON = await promiseEquipo.json();
            assert.equal(typeof (promiseJSON), "object");
        });
        it('Devuelve numero resultados esperados', async () => {
            promiseEquipo = await responseEquipo.historial(1);
            let promiseJSON = await promiseEquipo.json();
            assert.lengthOf(promiseJSON, "0");
        });
    });
    describe('findByCodigoCorrelativoLike(char)', () => {
        it('Devuelve status 200', async () => {
            promiseEquipo = await responseEquipo.findByCodigoCorrelativoLike("5");
            assert.equal(promiseEquipo.status, 200)
        });
        it('Debe devolver un json', async () => {
            promiseEquipo = await responseEquipo.findByCodigoCorrelativoLike("5");
            let promiseJSON = await promiseEquipo.json();
            assert.equal(typeof (promiseJSON), "object");
        });
        it('Devuelve numero resultados esperados', async () => {
            promiseEquipo = await responseEquipo.findByCodigoCorrelativoLike("5");
            let promiseJSON = await promiseEquipo.json();
            assert.lengthOf(promiseJSON, "7");
        });
    });

});

describe('Pruebas para OrdenTrabajoDetalleEstadoPasoResourceClient()', () => {
    describe('findDetalleEstadoPasoCompletado(idEquipoDetalle)', () => {
        it('Devuelve status 200', async () => {
            promiseOTDEP = await responseOTDEP.findDetalleEstadoPasoCompletado("123456789-0");
            assert.equal(promiseOTDEP.status, 200)
        });
        it('Debe devolver un json', async () => {
            promiseOTDEP = await responseOTDEP.findDetalleEstadoPasoCompletado("123456789-0");
            let promiseJSON = await promiseOTDEP.json();
            assert.equal(typeof (promiseJSON), "object");
        });
        it('Devuelve el numero de pasos esperado', async () => {
            promiseOTDEP = await responseOTDEP.findDetalleEstadoPasoCompletado("123456789-0");
            let promiseJSON = await promiseOTDEP.json();
            console.log(promiseJSON);
            assert.lengthOf(promiseJSON, "5");
        });
    });

});

mocha.run();