<template>
    <div>

    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios)

    export default {
        data:function() {
            return {
            students: [],
            search: '',
            name: [],
            group: [],
            isDonePr: '',
            per: false,
            ty: [],
            pibb: ['nasas'],
            stan: [],
            zdav: [],
            upid: []
            };

        },
        /* mounted: function () {
             this.students = students;
         },*/
        mounted: function(){
            Vue.axios.get("http://46.101.212.195:3000/students").then((response) => {
                this.students = response.data;
            })
        },
        methods: {
            clickme: function (_id) {
                alert("Ok");
                Vue.axios.delete("http://46.101.212.195:3000/students/"+ _id ).then(this.students = this.students.filter((element) => {
                    return element._id !== _id;
                }));
            },
            add: function () {
                Vue.axios.post("http://46.101.212.195:3000/students", {
                    name: this.name,
                    group: this.group,
                    isDonePr: false
                }).then((response) => {
                    this.students = response.data;
                })
            },
            change: function (item) {
                this.upid = item;

            },
            chh: function (item) {
                Vue.axios.put("http://46.101.212.195:3000/students/"+ item._id, {
                    name: item.name,
                    group: item.group,
                    isDonePr: true
                }).then((response) => {
                    this.students = response.data;
                })
                this.upid = null;
            },
            updatingUser: function (item) {

            },

        },

    };

</script>

<style scoped>

</style>