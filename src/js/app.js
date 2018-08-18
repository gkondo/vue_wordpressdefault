var Vue = require('vue');
var moment = require("moment");
//alert("welcome")
 
var vm = new Vue({
  el: '#app',
  data: {
    "now": moment().format('MMMM Do YYYY, h:mm:ss a'),
  }
})