<template>
    <div>
    <table style="border:1px solid black;">
        <tr>
            <td>
                <img v-bind:src="students.photo">
            </td>
        </tr>
        <tr>
            <td>{{students.name}}</td>
        </tr>
        <tr>
            <td>{{students.group}}</td>
        </tr>
        <tr>
            <td>Cредняя оценка: {{students.mark}}</td>
        </tr>

    </table>
        <transition>

        </transition>
    </div>

</template>

<script>

    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'

    Vue.use(VueAxios, axios)

    export default {
        name:'StudentInfo',
            props: {
                id: '',

            },
            data:function () {
            return {
                students: [],
            };
        },
        mounted: function(){
            Vue.axios.get("http://46.101.212.195:3000/students").then((response) => {
                this.students = response.data.find((element) =>{
                    return this.id === element._id;
                })
            })
        },

    }
</script>
