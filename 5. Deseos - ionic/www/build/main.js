webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pendientes_pendientes_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminados_terminados_component__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__pendientes_pendientes_component__["a" /* PendientesComponent */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__terminados_terminados_component__["a" /* TerminadosComponent */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/guillermo/Angular/5. Deseos - ionic/src/pages/tabs/tabs.html"*/'<ion-tabs color="primary">\n  <ion-tab [root]="tab1Root" tabTitle="Pendientes" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Terminados" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/guillermo/Angular/5. Deseos - ionic/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_lista_deseos_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agregar_agregar_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detalle_detalle_component__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendientesComponent = (function () {
    function PendientesComponent(_listaDeseos, navCtrl) {
        this._listaDeseos = _listaDeseos;
        this.navCtrl = navCtrl;
    }
    PendientesComponent.prototype.ngOnInit = function () { };
    PendientesComponent.prototype.irAgregar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__agregar_agregar_component__["a" /* AgregarComponent */]);
    };
    PendientesComponent.prototype.verDetalle = function (lista, idx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detalle_detalle_component__["a" /* DetalleComponent */], { lista: lista, idx: idx });
    };
    return PendientesComponent;
}());
PendientesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-pendientes',template:/*ion-inline-start:"/home/guillermo/Angular/5. Deseos - ionic/src/pages/pendientes/pendientes.component.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Lista de Pendientes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid *ngIf="( _listaDeseos.listas | pendientes ).length === 0">\n    <ion-row>\n      <ion-col class="text-center caja-vacia">\n        <ion-icon class="icono-grande" ios="ios-sunny" md="md-sunny"></ion-icon>\n        <p>\n          No hay ninguna lista.\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-card *ngFor="let lista of _listaDeseos.listas | pendientes; let i = index">\n\n    <ion-item color="dark" (click)="verDetalle(lista, i)">\n      <h2>{{ lista.nombre }}</h2>\n      <ion-note item-right>\n        {{ lista.items.length }} items\n      </ion-note>\n    </ion-item>\n\n    <ion-list>\n      <ion-item (click)="verDetalle(lista, i)"\n      *ngFor="let item of lista.items | slice:0:2">\n        <ion-icon *ngIf="!item.completado" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n        <ion-icon *ngIf="item.completado" ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>\n        {{ item.nombre }}\n      </ion-item>\n\n      <ion-item class="text-center" *ngIf="lista.items.length > 2">\n          <ion-icon color="primary" ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n  <ion-fab right bottom>\n      <button ion-fab color="primary" (click)="irAgregar()">\n        <ion-icon ios="ios-add" md="md-add"></ion-icon>\n      </button>\n    </ion-fab>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/guillermo/Angular/5. Deseos - ionic/src/pages/pendientes/pendientes.component.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_lista_deseos_service__["a" /* ListaDeseosService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
], PendientesComponent);

//# sourceMappingURL=pendientes.component.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_clases_index__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_lista_deseos_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgregarComponent = (function () {
    function AgregarComponent(alertCtrl, navCtrl, _listaDeseos) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this._listaDeseos = _listaDeseos;
        this.nombreLista = "";
        this.nombreItem = "";
        this.items = [];
    }
    AgregarComponent.prototype.ngOnInit = function () { };
    AgregarComponent.prototype.agregar = function () {
        if (this.nombreItem.length == 0) {
            return;
        }
        var item = new __WEBPACK_IMPORTED_MODULE_2__app_clases_index__["b" /* ListaItem */]();
        item.nombre = this.nombreItem;
        this.items.push(item);
        this.nombreItem = "";
    };
    AgregarComponent.prototype.borrarItem = function (idx) {
        this.items.splice(idx, 1);
    };
    AgregarComponent.prototype.guardarLista = function () {
        if (this.nombreLista.length == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la lista es necesario!',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        var lista = new __WEBPACK_IMPORTED_MODULE_2__app_clases_index__["a" /* Lista */](this.nombreLista);
        lista.items = this.items;
        //this._listaDeseos.listas.push( lista );
        this._listaDeseos.agregarLista(lista);
        this.navCtrl.pop();
    };
    return AgregarComponent;
}());
AgregarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-agregar',template:/*ion-inline-start:"/home/guillermo/Angular/5. Deseos - ionic/src/pages/agregar/agregar.component.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> {{ nombreLista | placeholder:\'Nueva lista\' }} </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n\n      <ion-item>\n        <ion-label floating>Nombre de la lista</ion-label>\n        <ion-input type="text" [(ngModel)]="nombreLista" name="nombreLista"></ion-input>\n      </ion-item>\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-item>\n        <ion-label floating>Item:</ion-label>\n        <ion-input (keyup.enter) = "agregar()"\n          type="text" [(ngModel)]="nombreItem" name="nombreItem"></ion-input>\n      </ion-item>\n\n      <button (click)="agregar()"\n        ion-button class="button-block">Agregar</button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <!--Items-->\n  <ion-card *ngIf="items.length > 0">\n    <ion-card-header>\n      <h3>Items agregados</h3>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-list>\n        <ion-item *ngFor="let item of items; let i = index ">\n          <button ion-button color="dark" clear>\n            {{ item.nombre }}\n          </button>\n\n          <button (click)="borrarItem(i)"\n            ion-button outline item-right color="danger">\n            <ion-icon ios="ios-trash" md="md-trash"></ion-icon>\n            Borrar item\n          </button>\n        </ion-item>\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <button (click)="guardarLista()"\n   ion-button icon-left class="button-block">\n    <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n    Agregar Lista\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/guillermo/Angular/5. Deseos - ionic/src/pages/agregar/agregar.component.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__app_services_lista_deseos_service__["a" /* ListaDeseosService */]])
], AgregarComponent);

//# sourceMappingURL=agregar.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_lista_deseos_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_detalle_component__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TerminadosComponent = (function () {
    function TerminadosComponent(_listaDeseos, navCtrl) {
        this._listaDeseos = _listaDeseos;
        this.navCtrl = navCtrl;
    }
    TerminadosComponent.prototype.ngOnInit = function () { };
    TerminadosComponent.prototype.verDetalle = function (lista, idx) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalle_detalle_component__["a" /* DetalleComponent */], { lista: lista, idx: idx });
    };
    return TerminadosComponent;
}());
TerminadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-terminados',template:/*ion-inline-start:"/home/guillermo/Angular/5. Deseos - ionic/src/pages/terminados/terminados.component.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Lista de Terminados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid *ngIf="( _listaDeseos.listas | pendientes:true ).length === 0">\n    <ion-row>\n      <ion-col class="text-center caja-vacia">\n        <ion-icon class="icono-grande" ios="ios-sunny" md="md-sunny"></ion-icon>\n        <p>\n          No hay ninguna lista.\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-card *ngFor="let lista of _listaDeseos.listas | pendientes:true; let i = index">\n\n    <ion-item color="dark" (click)="verDetalle(lista, i)">\n      <h2>{{ lista.nombre }}</h2>\n      <ion-note item-right>\n        {{ lista.items.length }} items\n      </ion-note>\n    </ion-item>\n\n    <ion-list>\n      <ion-item (click)="verDetalle(lista, i)"\n      *ngFor="let item of lista.items | slice:0:2">\n        <ion-icon *ngIf="!item.completado" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n        <ion-icon *ngIf="item.completado" ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>\n        {{ item.nombre }}\n      </ion-item>\n\n      <ion-item class="text-center" *ngIf="lista.items.length > 2">\n          <ion-icon color="primary" ios="ios-arrow-dropdown" md="md-arrow-dropdown"></ion-icon>\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/guillermo/Angular/5. Deseos - ionic/src/pages/terminados/terminados.component.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_services_lista_deseos_service__["a" /* ListaDeseosService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]])
], TerminadosComponent);

//# sourceMappingURL=terminados.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(216);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_lista_deseos_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_placeholder_pipe__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_pendientes_pipes__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pendientes_pendientes_component__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_terminados_terminados_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_agregar_agregar_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_detalle_detalle_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Servicio

//Pipe









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_placeholder_pipe__["a" /* PlaceHolderPipe */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_pendientes_pipes__["a" /* PendientesPipe */],
            __WEBPACK_IMPORTED_MODULE_9__pages_terminados_terminados_component__["a" /* TerminadosComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pendientes_pendientes_component__["a" /* PendientesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_agregar_agregar_component__["a" /* AgregarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_detalle_detalle_component__["a" /* DetalleComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_terminados_terminados_component__["a" /* TerminadosComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pages_pendientes_pendientes_component__["a" /* PendientesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_agregar_agregar_component__["a" /* AgregarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_detalle_detalle_component__["a" /* DetalleComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_lista_deseos_service__["a" /* ListaDeseosService */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/guillermo/Angular/5. Deseos - ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/guillermo/Angular/5. Deseos - ionic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lista_item__ = __webpack_require__(267);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__lista_item__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listas__ = __webpack_require__(268);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__listas__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaItem; });
var ListaItem = (function () {
    function ListaItem() {
    }
    return ListaItem;
}());

//# sourceMappingURL=lista-item.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lista; });
var Lista = (function () {
    function Lista(nombre) {
        this.nombre = nombre;
        this.terminada = false;
    }
    return Lista;
}());

//# sourceMappingURL=listas.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceHolderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlaceHolderPipe = (function () {
    function PlaceHolderPipe() {
    }
    PlaceHolderPipe.prototype.transform = function (value, defecto) {
        return (value) ? value : defecto;
    };
    return PlaceHolderPipe;
}());
PlaceHolderPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'placeholder'
    })
], PlaceHolderPipe);

//# sourceMappingURL=placeholder.pipe.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PendientesPipe = (function () {
    function PendientesPipe() {
    }
    PendientesPipe.prototype.transform = function (listas, estado) {
        if (estado === void 0) { estado = false; }
        var nuevaLista = [];
        for (var _i = 0, listas_1 = listas; _i < listas_1.length; _i++) {
            var lista = listas_1[_i];
            if (lista.terminada == estado) {
                nuevaLista.push(lista);
            }
        }
        return nuevaLista;
    };
    return PendientesPipe;
}());
PendientesPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'pendientes',
        pure: false
    })
], PendientesPipe);

//# sourceMappingURL=pendientes.pipes.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaDeseosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListaDeseosService = (function () {
    function ListaDeseosService() {
        /*let lista1 = new Lista('Compras de supermercado');
        let lista2 = new Lista('Juegos que deseo');
        let lista3 = new Lista('Cosas de la universidad');
    
        this.listas.push( lista1 );
        this.listas.push( lista2 );
        this.listas.push( lista3 );*/
        this.listas = [];
        this.cargarData();
        console.log("Servicio inicializado!!");
    }
    ListaDeseosService.prototype.actualizarData = function () {
        localStorage.setItem("data", JSON.stringify(this.listas));
    };
    ListaDeseosService.prototype.cargarData = function () {
        if (localStorage.getItem("data")) {
            this.listas = JSON.parse(localStorage.getItem("data"));
        }
    };
    ListaDeseosService.prototype.agregarLista = function (lista) {
        this.listas.push(lista);
        this.actualizarData();
    };
    ListaDeseosService.prototype.eliminarLista = function (idx) {
        this.listas.splice(idx, 1);
        this.actualizarData();
    };
    return ListaDeseosService;
}());
ListaDeseosService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ListaDeseosService);

//# sourceMappingURL=lista-deseos.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_lista_deseos_service__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalleComponent = (function () {
    function DetalleComponent(navCtrl, navParams, alertCtrl, _listaDeseos) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this._listaDeseos = _listaDeseos;
        this.idx = this.navParams.get("idx");
        this.lista = this.navParams.get("lista");
    }
    DetalleComponent.prototype.ngOnInit = function () { };
    DetalleComponent.prototype.actualizar = function (item) {
        item.completado = !item.completado;
        var todosMarcados = true;
        for (var _i = 0, _a = this.lista.items; _i < _a.length; _i++) {
            var item_1 = _a[_i];
            if (!item_1.completado) {
                todosMarcados = false;
                break;
            }
        }
        this.lista.terminada = todosMarcados;
        this._listaDeseos.actualizarData();
    };
    DetalleComponent.prototype.borrarItem = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: 'Esta seguro que desea eliminar la lista?',
            buttons: ['Cancelar',
                {
                    text: 'Eliminar',
                    handler: function () {
                        //console.log('Agree clicked');
                        _this._listaDeseos.eliminarLista(_this.idx);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    };
    return DetalleComponent;
}());
DetalleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-detalle',template:/*ion-inline-start:"/home/guillermo/Angular/5. Deseos - ionic/src/pages/detalle/detalle.component.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> {{ lista.nombre }} </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <ion-label floating>Nombre de la lista</ion-label>\n        <ion-input type="text" [(ngModel)]="lista.nombre"></ion-input>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor="let item of lista.items" (click)="actualizar(item)">\n          <ion-icon item-left *ngIf="!item.completado" ios="ios-square-outline" md="md-square-outline"></ion-icon>\n          <ion-icon item-left *ngIf="item.completado" ios="ios-checkbox-outline" md="md-checkbox-outline"></ion-icon>\n          <h2 [class.tachado]="item.completado" >{{ item.nombre }}</h2>\n        </ion-item>\n      </ion-list>\n\n\n    </ion-card-content>\n  </ion-card>\n\n  <br><br>\n  <button (click)="borrarItem()"\n      ion-button class="button-block" color="danger">\n      Borrar Lista\n    </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/guillermo/Angular/5. Deseos - ionic/src/pages/detalle/detalle.component.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__app_services_lista_deseos_service__["a" /* ListaDeseosService */]])
], DetalleComponent);

//# sourceMappingURL=detalle.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map