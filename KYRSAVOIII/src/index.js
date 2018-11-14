import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
new Vue({
    render: h => h(App),
    el: '#app',
})




/*new Vue({
     el: '#appp',
     data: {
         students: [],
		 search:''
     },	 
     mounted: function(){
         Vue.axios.get("http://www.apilayer.net/api/live?access_key=bdb1289ef8ad2364fc710b79d15c6aec").then((response) => {
             this.students = response.data;
         })
     },
     methods: {
        clickme: function(id) {
            alert("Ok");
            this.students = this.students.filter((element) => {
                return element.id !== id;
            });
        }
     },
  
 });    */

