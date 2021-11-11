import Vue from 'vue'

import title from './title.js'
import count from './count.js'
import fullscreen from './fullscreen.js'
import drag from './drag.js'
import dragM from './drag-m.js'

Vue.directive('title', title)
Vue.directive('count', count)
Vue.directive('fullscreen', fullscreen)
Vue.directive('drag', drag)
Vue.directive('drag-m', dragM)