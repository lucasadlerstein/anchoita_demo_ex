module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./context/seleccion/seleccionContext.js
var seleccionContext = __webpack_require__("c+Wz");

// CONCATENATED MODULE: ./types/index.js
const NUEVA_ETAPA = 'NUEVA_ETAPA';
const NUEVA_V_PAIS = 'NUEVA_V_PAIS';
const NUEVA_V_TIPO = 'NUEVA_V_TIPO';
const VISIBILIDAD_CARRITO = 'VISIBILIDAD_CARRITO';
const VACIAR_CARRITO = 'VACIAR_CARRITO';
const CAMBIAR_CANTIDAD = 'CAMBIAR_CANTIDAD';
const AGREGAR_NUEVO = 'AGREGAR_NUEVO';
const GET_STORAGE = 'GET_STORAGE';
const CAMBIAR_BUSQUEDA = 'CAMBIAR_BUSQUEDA';
const CAMBIAR_SHAKE = 'CAMBIAR_SHAKE';
// CONCATENATED MODULE: ./context/seleccion/seleccionReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Reducer = (state, action) => {
  switch (action.type) {
    case NUEVA_ETAPA:
      return _objectSpread(_objectSpread({}, state), {}, {
        etapa: action.payload,
        v_tipo: null,
        v_pais: null
      });

    case NUEVA_V_PAIS:
      return _objectSpread(_objectSpread({}, state), {}, {
        v_pais: action.payload,
        v_tipo: null
      });

    case NUEVA_V_TIPO:
      return _objectSpread(_objectSpread({}, state), {}, {
        v_tipo: action.payload
      });

    case VISIBILIDAD_CARRITO:
      return _objectSpread(_objectSpread({}, state), {}, {
        carrito: action.payload
      });

    case VACIAR_CARRITO:
      localStorage.removeItem('carrito');
      return _objectSpread(_objectSpread({}, state), {}, {
        productosCarrito: []
      });

    case AGREGAR_NUEVO:
      return _objectSpread(_objectSpread({}, state), {}, {
        productosCarrito: [...state.productosCarrito, action.payload],
        shake: true
      });

    case CAMBIAR_CANTIDAD:
      const carr = state.productosCarrito.map((prod, index, object) => {
        if (prod.nombre === action.payload.nombre) {
          if (action.payload.operacion === 'suma') {
            prod.cantidad++;
          } else if (action.payload.operacion === 'resta') {
            prod.cantidad--;
          }

          return prod;
        } else {
          return prod;
        }
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        productosCarrito: carr,
        shake: true
      });

    case GET_STORAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        productosCarrito: action.payload
      });

    case CAMBIAR_BUSQUEDA:
      return _objectSpread(_objectSpread({}, state), {}, {
        busqueda: action.payload
      });

    case CAMBIAR_SHAKE:
      return _objectSpread(_objectSpread({}, state), {}, {
        shake: false
      });

    default:
      return state;
  }
};

/* harmony default export */ var seleccionReducer = (Reducer);
// CONCATENATED MODULE: ./context/seleccion/seleccionState.js






const SeleccionState = ({
  children
}) => {
  const stateInicial = {
    etapa: null,
    v_pais: null,
    v_tipo: null,
    carrito: false,
    shake: false,
    busqueda: '',
    productosCarrito: [// {
      //     categoria: 'comidas',
      //     nombre: 'Bla bla bla',
      //     cantidad: 1
      // },
      // {
      //     categoria: 'comidas',
      //     nombre: 'Bla bla blassss s s',
      //     cantidad: 1
      // },
    ]
  };
  const {
    0: state,
    1: dispatch
  } = Object(external_react_["useReducer"])(seleccionReducer, stateInicial);

  const cambiarSeleccion = (llave, valor) => {
    if (llave === 'etapa') {
      dispatch({
        type: NUEVA_ETAPA,
        payload: valor
      });
    } else if (llave === 'v_tipo') {
      dispatch({
        type: NUEVA_V_TIPO,
        payload: valor
      });
    } else if (llave === 'v_pais') {
      dispatch({
        type: NUEVA_V_PAIS,
        payload: valor
      });
    }
  };

  const visibilidadCarrito = estado => {
    dispatch({
      type: VISIBILIDAD_CARRITO,
      payload: !estado
    });
  };

  const vaciarCarrito = () => {
    dispatch({
      type: VACIAR_CARRITO
    });
  };

  const cambiarCantidad = (nombre, operacion) => {
    const info = {
      nombre,
      operacion
    };
    dispatch({
      type: CAMBIAR_CANTIDAD,
      payload: info
    });
    actualizarStorage();
    setTimeout(() => {
      dispatch({
        type: CAMBIAR_SHAKE
      });
    }, 1200);
  };

  const agregarNuevo = informacion => {
    let existe = false;
    state.productosCarrito.forEach(producto => {
      if (producto.nombre === informacion.nombre) {
        existe = true;
      }
    });

    if (existe) {
      const info = {
        nombre: informacion.nombre,
        operacion: 'suma'
      };
      dispatch({
        type: CAMBIAR_CANTIDAD,
        payload: info
      });
    } else {
      dispatch({
        type: AGREGAR_NUEVO,
        payload: informacion
      });
    }

    actualizarStorage();
    setTimeout(() => {
      dispatch({
        type: CAMBIAR_SHAKE
      });
    }, 1200);
  };

  const actualizarStorage = () => {
    setTimeout(() => {
      localStorage.setItem('carrito', JSON.stringify(state.productosCarrito));
    }, 500);
  };

  const getStorage = () => {
    dispatch({
      type: GET_STORAGE,
      payload: JSON.parse(localStorage.getItem('carrito'))
    });
  };

  const cambiarBusqueda = typeado => {
    dispatch({
      type: CAMBIAR_BUSQUEDA,
      payload: typeado
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(seleccionContext["a" /* default */].Provider, {
    value: {
      etapa: state.etapa,
      v_pais: state.v_pais,
      v_tipo: state.v_tipo,
      carrito: state.carrito,
      productosCarrito: state.productosCarrito,
      busqueda: state.busqueda,
      shake: state.shake,
      cambiarSeleccion,
      visibilidadCarrito,
      vaciarCarrito,
      cambiarCantidad,
      agregarNuevo,
      actualizarStorage,
      getStorage,
      cambiarBusqueda
    },
    children: children
  });
};

/* harmony default export */ var seleccionState = (SeleccionState);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./styles/animaciones.css
var animaciones = __webpack_require__("MahM");

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(seleccionState, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (Object(i18n["appWithTranslation"])(MyApp));

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "MahM":
/***/ (function(module, exports) {



/***/ }),

/***/ "c+Wz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const seleccionContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["a"] = (seleccionContext);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "k7Sn":
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__("6f9I").default; // const { localeSubpaths } = require('next/config').default().publicRuntimeConfig


const path = __webpack_require__("oyvS");

module.exports = new NextI18Next({
  otherLanguages: ['en'],
  defaultLanguage: 'es',
  localeSubpaths: {
    en: 'en'
  },
  localePath: path.resolve('./public/static/locales')
});

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });