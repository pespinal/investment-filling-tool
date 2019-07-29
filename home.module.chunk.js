webpackJsonp(["home.module"],{

/***/ "../../../../../src/features/home/components/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background-img\">\n  <picture>\n    <img alt=\"background-img\" src=\"assets/img/bg-landing-01.jpg\">\n  </picture>\n</div>\n\n<div id=\"skeleton-container\" class=\"skeleton-container container\">\n  <div class=\"ske-card-desk\">\n    <div class=\"ske-card float-left\">\n      <div class=\"ske-card-header\">\n        <p>¿Qué quieres hacer?</p>\n      </div>\n      <div class=\"ske-card-body\">\n        <ul class=\"flex-container\">\n          <button class=\"flex-item\">Formular</button>\n          <button class=\"flex-item\">Reformular</button>\n        </ul>\n        <ul class=\"flex-container\">\n          <button class=\"flex-item\">Consultar</button>\n          <button class=\"flex-item\">Vender</button>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<noscript>Tu navegador no soporta javascript!</noscript>"

/***/ }),

/***/ "../../../../../src/features/home/components/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.flex-item {\n  background: lightgray;\n  padding: 5px;\n  width: 100px;\n  height: 75px;\n  margin-top: 10px;\n  border-radius: 10px;\n  line-height: 70px;\n  color: black;\n  font-weight: bold;\n  font-size: 1em;\n  text-align: center; }\n\n/* SKELETON SCREEN */\n.cebolla {\n  opacity: .6; }\n\n.skeleton-container {\n  width: 100%;\n  /* position: absolute;\n    background-color: #fff; */\n  top: 0px;\n  float: left;\n  padding: 0px;\n  margin: 0px;\n  height: auto;\n  height: -webkit-fill-available;\n  z-index: 100000; }\n\n.skeleton-content-header {\n  --title-skeleton: linear-gradient(#ccc 40px, transparent 0);\n  --title-size: 26% 40px;\n  --title-position: 50% 41%;\n  --stitle-skeleton: linear-gradient(#ccc 25px, transparent 0);\n  --stitle-size: 50% 25px;\n  --stitle-position: 50% 74.9%;\n  width: 100%;\n  height: 190px;\n  position: relative;\n  background-repeat: no-repeat;\n  background-image: var(--title-skeleton), var(--stitle-skeleton);\n  background-position: var(--title-position), var(--stitle-position);\n  background-size: var(--title-size), var(--stitle-size); }\n\n.ske-card-desk {\n  /* width: 100%; */\n  box-sizing: inherit;\n  padding: 50px 0px 0px 300px; }\n\n.ske-card {\n  position: relative;\n  width: 65.77%;\n  height: 330px;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: .25rem;\n  margin-bottom: 1.5rem !important; }\n\n.ske-card-header {\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  height: 53px;\n  text-align: center;\n  font-family: 'Courier New', Courier, monospace; }\n\n.ske-card-header p {\n  margin: 0;\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.ske-card-body p {\n  margin: 0;\n  text-align: center; }\n\n.ske-card-body {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  height: 176px;\n  position: relative;\n  background-repeat: no-repeat;\n  padding: 25px 0px 10px 0px;\n  background-image: var(--title-skeleton), var(--stitle-skeleton), var(--s2title-skeleton);\n  background-position: var(--title-position), var(--stitle-position), var(--s2title-position);\n  background-size: var(--title-size), var(--stitle-size), var(--stitle-size); }\n\n.button-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: center;\n      justify-content: center; }\n\n.form-control {\n  color: #5C6166;\n  font-size: 1rem;\n  padding: 0.75rem;\n  height: initial;\n  margin: 0% 32%; }\n\n.button-form {\n  color: #5C6166;\n  font-size: 1rem;\n  padding: 0.75rem;\n  height: initial;\n  margin: 3% 40%; }\n\nlabel.control-label {\n  line-height: inherit;\n  font-weight: 400;\n  width: 100%; }\n\nlabel {\n  color: #5C6166;\n  line-height: inherit;\n  font-weight: 400;\n  width: 100%;\n  margin: 0% 32%; }\n\n.ske-card-button {\n  width: 100%;\n  position: relative;\n  background-repeat: no-repeat;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n  height: 74px; }\n\n@media only screen and (max-width: 1024px) {\n  .skeleton-content-header {\n    --title-size: 50% 40px;\n    --stitle-size: 58% 25px; }\n  .ske-card {\n    width: 45.0%;\n    height: 328px; }\n  .ske-card-body {\n    height: 200px;\n    --title-size: 36% 40px;\n    --title-position: 50% 15%;\n    --stitle-position: 50% 47.9%;\n    --s2title-position: 50% 60.9%; } }\n\n@media only screen and (max-width: 480px) {\n  .skeleton-content-header {\n    --title-size: 70% 40px;\n    --stitle-size: 75% 25px;\n    --title-position: 50% 20%;\n    --stitle-position: 50% 56.9%;\n    height: 183px; }\n  .ske-card-desk {\n    padding-top: 0px; }\n  .ske-card {\n    width: 99.5%;\n    height: 380px; }\n  .ske-card-header {\n    height: 81px; }\n  .ske-card-body {\n    height: 224px;\n    --title-size: 44% 40px;\n    --title-position: 50% 13%;\n    --stitle-position: 50% 41.9%;\n    --s2title-position: 50% 53.9%; } }\n\n@media only screen and (max-width: 320px) {\n  .skeleton-content-header {\n    height: 280px;\n    --title-skeleton: linear-gradient(#ccc 40px, transparent 0);\n    --title-size: 37% 40px;\n    --title-position: 50% 13%;\n    --xtitle-skeleton: linear-gradient(#ccc 40px, transparent 0);\n    --xtitle-size: 51% 40px;\n    --xtitle-position: 50% 41%;\n    --stitle-skeleton: linear-gradient(#ccc 25px, transparent 0);\n    --stitle-size: 80% 25px;\n    --stitle-position: 50% 62.9%;\n    --s2title-skeleton: linear-gradient(#ccc 25px, transparent 0);\n    --s2title-size: 80% 25px;\n    --s2title-position: 50% 74.9%;\n    background-image: var(--title-skeleton), var(--xtitle-skeleton), var(--stitle-skeleton), var(--s2title-skeleton);\n    background-position: var(--title-position), var(--xtitle-position), var(--stitle-position), var(--s2title-position);\n    background-size: var(--title-size), var(--xtitle-size), var(--stitle-size), var(--s2title-size); } }\n\n.container {\n  max-width: 100%; }\n\n.container-choice {\n  border-style: solid;\n  border-width: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/features/home/components/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* import { TranslateService } from '@ngx-translate/core';
import { RoutesPaths } from '@shared/domain/routes-paths';
import { CommonValidators } from '@shared/validators/common.validator';
import { SessionStorageHandler } from 'cob-infrastructure';
import { SingleFormComponent } from 'cob-ui-components'; */
/* import { PersonalDataHandler } from '../../handler/login.handler'; */
var LandingComponent = (function () {
    function LandingComponent(formBuilder, 
        /* private componentHandler: PersonalDataHandler, */
        router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.errorMessages = {};
        /* super(router);
        this.translateService.setDefaultLang('es');*/
        //this.createForm();
    }
    LandingComponent.prototype.goHome = function () {
        console.log('aqui');
        this.router.navigate(['/home']);
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/features/home/components/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/features/home/components/landing/landing.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LandingComponent);

var _a, _b;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/features/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_landing_landing_component__ = __webpack_require__("../../../../../src/features/home/components/landing/landing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__components_landing_landing_component__["a" /* LandingComponent */],
    },
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/features/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("../../../../../src/features/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_landing_landing_component__ = __webpack_require__("../../../../../src/features/home/components/landing/landing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* import { SharedModule } from '@shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';
import { InvokerService, LoggerModule } from 'cob-infrastructure';
import { HttpServiceModule } from 'cob-infrastructure';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { PersonalDataHandler } from './handler/personal-data.handler'; */


var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            /* SharedModule, */
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__components_landing_landing_component__["a" /* LandingComponent */]],
        providers: [],
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map