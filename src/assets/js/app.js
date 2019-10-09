import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'
import '../css/app.css'
//import '../scss/style.scss'
//import '../css/fontawesome-all.css' // 오류남
import 'animate.css'
import 'lightbox2/dist/css/lightbox.min.css'
import 'lightbox2/dist/js/lightbox-plus-jquery.js'
import WOW from 'wow.js'

import { add, substract, multiply, divide } from './modules/script.js'

console.log(add(10, 5))
console.log(substract(10, 5))
console.log(multiply(10, 5))
console.log(divide(10, 5))

import {wow} from './modules/wowAnimate.js'