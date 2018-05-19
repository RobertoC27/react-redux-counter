import * as actionNames from './actionNames'

//http://exploringjs.com/es6/ch_arrow-functions.html#sec_syntactic-pitfalls-arrow-functions Punto 13.5.4
//y tambien el codigo de my-keep
//Se usan los parentesis xq queremos que se pueda ejecutar como una funcion la const
//si solamente quisieramos que nos devolviera el 'valor' ponemos la funcion sin parentesis
const INCREMENT = () => ({type: actionNames.INCREMENT});

const DECREMENT = () => ({type: actionNames.DECREMENT});

const ADD = (factor) => ({ type: actionNames.ADD, payload: {factor}});

const SUBTRACT = (factor) => ({type: actionNames.SUBTRACT, payload: {factor}});

const STORE_RESULT = (id) => ({type: actionNames.STORE_RESULT, payload: {id}});

const DELETE_RESULT = (id) => ({type: actionNames.DELETE_RESULT, payload: {id}});

export {INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RESULT, DELETE_RESULT}