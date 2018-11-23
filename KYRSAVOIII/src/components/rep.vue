<template>
    <div>
        <div class="container" style="height: 90px">
            <div class="row">
                <div class="col-md-12 block" style="padding: 0%">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-3" style=" padding: 0%">
                                <img src="../assets/img/logo.gif" width="100%" style="padding: 10px">
                            </div>
                            <div class="col-sm-6"></div>
                            <div class="col-sm-2"></div>
                            <div class="col-sm-1" style="background: #F4716A;height:90px">
                                <img src="../assets/img/icons/icons8-пользователь-без-половых-признаков-filled-50.png" id="enter">
                                <span id="enterName">Вход</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 block3">
                    <div class="input-wrapper" data-text="">
                        <input type="text"  placeholder="Поиск..." v-model = "search" />
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-lg-8 block2" style="padding: 0%">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 image img" style="padding: 0%">
                                <div class="img-mask"></div>
                                <img src="../assets/img/thumb.jpg" alt="" width="100%" height="100%" style="opacity: 0.5"/>
                                <h2 class="h2">Яблочные драники</h2>
                                <h2 class="h22">Популярный рецепт</h2>
                                <button type="button" class="but btn " value="смотреть подробней">смотреть подробней</button>
                            </div>
                        </div>
                    </div>
                    <div class="newrep">
                        <h2 class="new">Новые рецепты</h2>
                    </div>
                    <div class="rep">
                        <div class="container-fluid" id="blockImg ">
                            <div class="row">

                                <div  v-for="(item,index) in filteredItems" class="col-md-4 pad1 " v-bind:key="index">
                                    <router-link v-bind:to="/rep/+item._id">
                                        <div class="kartinka">

                                            <img v-bind:src="item.img" width="100%" height="100%" >
                                        </div>
                                        <!--<img :src="rep[0].img" width="100%" height="100%" />-->
                                        <div class="white">
                                            {{item.op}}
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <b-pagination align="center" class="btn btn-danger" v-for="p in pagination.pages" @click.prevent="setPage(p)" v-bind:key="p._id">
                            {{p}}
                        </b-pagination>

                    </div>
                </div>

                <div class="col-xs-12 col-lg-4 block2" style="padding-right: 0%">
                    <div class="cat">
                        <div class="name">Категории рецептов</div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4 vis1 vis">
                                    <div class="ico">
                                        <img src="../assets/img/icons/icons8-стейк-50.png" class="span">
                                        <span>Мясо</span>
                                    </div>
                                </div>
                                <div class="col-md-4 vis2 vis">
                                    <div class="ico">
                                        <img src="../assets/img/icons/icons8-гамбургер-50.png" class="span">
                                        <span>Закуски</span>
                                    </div>
                                </div>
                                <div class="col-md-4 vis3 vis">
                                    <div class="ico">
                                        <img src="../assets/img/icons/icons8-еда-50.png" class="span">
                                        <span>Гарниры</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 vis2 vis">
                                    <div class="ico">
                                        <img src="../assets/img/icons/icons8-круассан-50.png" class="span">
                                        <span>Выпечка</span>
                                    </div>
                                </div>
                                <div class="col-md-4 vis3 vis">
                                    <div class="ico">
                                        <img src="../assets/img/icons/icons8-кондитерские-изделия-50.png" class="span">
                                        <span>Десерты</span>
                                    </div>
                                </div>
                                <div class="col-md-4 vis1 vis">
                                    <div class="ico">
                                        <img src="../assets/img/icons/icons8-кебаб-50.png" class="span">
                                        <span>Гриль</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 vis3 vis">
                                    <div class="ico">
                                        <img src="../assets/img/icons/icons8-целая-рыба-50.png" class="span">
                                        <span>Рыба</span>
                                    </div>
                                </div>
                                <div class="col-md-4 vis1 vis">
                                    <div class="ico">
                                        <img src="../assets/img/icons/icons8-бар-50.png" class="span">
                                        <span>Напитки</span>
                                    </div>
                                </div>
                                <div class="col-md-4 vis2 vis">
                                    <div class="ico">
                                        <img src="../assets/img/icons/icons8-салат-50.png" class="span">
                                        <span>Салат</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 vis1 vis">
                                    <div class="ico">
                                        <img src="../assets/img/icons/icons8-блины-50.png" class="span">
                                        <span>Завтрак</span>
                                    </div>
                                </div>
                                <div class="col-md-4 vis2 vis">
                                    <div class="ico">
                                        <img src="../assets/img/icons/icons8-торт-ко-дню-рождения-50.png" class="span">
                                        <span>Торты</span>
                                    </div>
                                </div>
                                <div class="col-md-4 vis3 vis">
                                    <div class="ico">
                                        <img src="../assets/img/icons/icons8-черпак-50.png" class="span">
                                        <span>Супы</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import lodash from 'lodash'
    import Vuex from 'vuex';

    Vue.use(Vuex);

    Vue.use(VueAxios, axios,lodash)

    export default {
        data: function () {
            return {
                rep: [
                    {_id:1,img: "../assets/img/1.jpg", op: 'Запеченный грейпфрут'},
                    {_id:2,img: "../assets/img/2.jpg", op: 'Гренки на сковороде'},
                    {_id:3,img: "../assets/img/3.jpg", op: 'Курица, запеченная с капустой'},
                    {_id:4,img: "../assets/img/4.jpg", op: 'Курица, запеченная с капустой'},
                    {_id:5,img: "../assets/img/5.jpg", op: 'Люля-кебаб «Дедушкины усы»'},
                    {_id:6,img: "../assets/img/6.jpg", op: 'Запеканка из брокколи с сыром и грибами'},
                    {_id:7,img: "../assets/img/7.jpg", op: 'Домашний «Сникерс»'},
                    {_id:8,img: "../assets/img/8.jpg", op: 'Печенье «Американер»'},
                    {_id:10,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:11,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:12,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:13,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:14,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:15,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:16,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:17,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:18,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:19,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:20,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:21,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:22,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:23,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:24,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:25,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:26,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:27,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:28,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:29,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:30,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:31,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:32,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:33,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:34,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:35,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:36,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:37,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:38,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:39,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:40,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:41,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:42,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:43,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:44,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:45,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:46,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:47,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:48,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:49,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},
                    {_id:50,img: "../assets/img/9.jpg", op: 'Свинина, запеченная в сливках'},


                ],
                search: [],
                float: 'left',
                perPage: 9,
                pagination:[],
                poch:[],
                pep:[]

            };

        },
        mounted: function(){

                this.pep = this.rep;

        },
        /* mounted: function () {
             this.students = students;
         },*/
        methods:{
            setPage(p){
                this.pagination=this.paginator(this.rep.length,p);
            },
            paginate(rep){
                return _.slice(rep,this.pagination.startIndex, this.pagination.endIndex +1)
            },
            paginator(totalItems,currentPage){
                var startIndex=(currentPage-1)*this.perPage,
                    endIndex=Math.min(startIndex + this.perPage-1,totalItems - 1);
                return {
                    currentPage:currentPage,
                    startIndex:startIndex,
                    endIndex:endIndex,
                    pages: _.range(1,Math.ceil(totalItems / this.perPage) + 1)
                };
            },

        },
        created(){
            this.setPage(1);
        },
        computed:{
            collection(){
                return this.paginate(this.rep);
            },

            filteredItems:function () {

                /**
                 * @var string search
                 * @var array string elements
                 * @return array strung elementsToSearch
                 *
                 * function () {
                 *
                 * }
                 */



                if (this.search.length === 0){
                    return this.paginate(this.rep);
                }
                return this.paginate(this.rep).filter(element=>{
                    return(element.op.toUpperCase().indexOf(this.search.toUpperCase()) > -1);
                })


            }}

    }
</script>

<style>
    body {
        font: 17px/1.42 Roboto,Arial,Helvetica,sans-serif;
        text-align: center;
        color: #444;
        background: url('../assets/img/body-2.jpg') #DECEB9;
        background-image: url('../assets/img/body-2.jpg');
        background-position-x: initial;
        background-position-y: initial;
        background-size: initial;
        background-repeat-x: initial;
        background-repeat-y: initial;
        background-attachment: initial;
        background-origin: initial;
        background-clip: initial;
        background-color: rgb(222, 206, 185);
        word-wrap: break-word;
        text-rendering: optimizeLegibility;
    }
    @font-face {
        font-family: Roboto; /* Имя шрифта */
        src: url('../assets/fonts/Roboto.ttf'); /* Путь к файлу со шрифтом */
    }
    .block{
        background: #fff;
        height: 90px;
        margin-bottom: 30px;
    }
    .block2{
        /* background: indianred;*/
        border: 1px solid #444444;
        height: 1500px;

    }
    .img{
        height: 400px;
        width: 100%;
        background: black;
        /*background: url(image-mask.png);*/
        /*background: white;*/
        margin-bottom: 30px;

    }
    .popular{
        background: url('../assets/img/ribbons.png') -300px -11px no-repeat;
        height: 43px;
        width: 300px;
        position: static;
        line-height: 43px!important;
        margin: 0 0 40px;
        font-size: 22px;
        color: #fff!important;
    }
    .newrep{
        width: 100%;
        height: 70px;
        /*background: #DECEB9;*/
    }
    .rep{
        width: 100%;
        height: 900px;
        /*background: yellowgreen;*/
    }
    .cat{
        width: 100%;
        height: 800px;
        /*background: goldenrod;*/
    }
    .new{
        background-repeat: no-repeat;
        background-position: -50px -64px;
        background-image: url('../assets/img/ribbons.png');
        height: 43px;
        width: 215px;
        position: static;
        line-height: 43px!important;
        margin: 0 0 30px;
        color: #fff!important;
        font: bold 22px Roboto;


    }
    .image {
        position	: relative;
        width		: 100%; /* for IE 6 */

    }

    .h2 {
        position	: absolute;
        top		: 160px;
        left		: 0;
        width		: 100%;
        color:#fff;
        font: bold 29px Roboto;
    }
    .h22 {
        color			: white;
        font			: bold 24px/45px Roboto, Sans-Serif;
        letter-spacing		: -1px;
        /* на случай, если следующая строка не сработает */
        background: url('../assets/img/ribbons.png') no-repeat -290px -7px;
        /*padding			: 10px;*/
        height: 50px;
        width: 290px;
        position: absolute;
        top:20px;
        left:0;
        font-size: 24px;


    }
    .but{
        position: absolute;
        top:240px;
        left		: 0;
        margin-left: 38%;
    }
    /*.myDiv {
        position: relative;
        z-index: 5;
        /*height: 300px;
        width: 700px;
        color: #000;
        font-size: 400%;
        /*padding: 20px;*/
    /*margin-top: 40px;
    font-family: Arial;
    text-transform: capitalize;
    }*/
    /*.myDiv .bg {
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #ccc ;
        opacity: .4;
        width: 100%;
        height: 100%;
    }*/
    .img-mask {
        background: url('../assets/img/image-mask.png');
        height: 100%;
        position: absolute;
    }
    h2{
        font-family: Roboto;
    }
    .name{
        background: white;
        color: #383838;
        font: bold 20px Roboto;
        text-align: left;
        height: 50px;
        padding-top: 3%;
        padding-left: 4%;

    }
    .vis{

        height: 93.75px;
        transition: .5s ease;

    }
    .vis1{
        background: #FF8E88;
        height: 93.75px;
    }
    .vis2{
        background: #FF7B74;
        height: 93.75px;
    }
    .vis3{
        background: #F4716A;
        height: 93.75px;
    }
    .vis:hover {
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
        box-shadow: inset 0 0 30px 3px rgba(169, 79, 72, 0.93);

    }
    .block3{
        height: 70px;
        margin-bottom: 20px;

    }
    .input-wrapper {
        width: 500px;
        margin: 0px auto;
        position: relative;
    }

    .input-wrapper::after {
        content: attr(data-text);
        font-size: 1.5rem;
        line-height: 0;
        height: 0;
        max-width: 100%;
        font-family: Roboto, Arial, sans-serif;
        border-bottom: 3px solid #fff;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 3px;
        overflow: hidden;
        user-select: none;
        color: transparent;
    }

    input {
        color: rgba(51, 51, 51, 0.98);
        border: none;
        padding: 0;
        border-radius: 0;
        outline: none;
        width: auto;
        min-width: 100%;
        font-size: 1.5rem;
        line-height: 3em;
        font-family: Roboto, Arial, sans-serif;
        border-bottom: 3px solid rgba(210, 116, 119, 0.77);
        background-color: transparent;
    }
    .bl{
        height: 300px;
        background: #F4716A;
        border: 1px solid black;
    }
    .fig{
        height: 200px;
    }
    .id{
        font-size: 17px;
        font-weight: 600;
        padding: 0 0 16px;
        color: #454545;
        text-align: left;

    }
    .coon{
        height: 100px;
        background: white;
    }
    .blockImg{
        width: 200px;

        padding: 0%;
        margin: 0%;
    }
    .kartinka{
        width: 100%;
        height: 65%;

    }
    .pad1{
        padding-right: 0.5%;
        padding-left: 0%;
        height: 300px;


    }
    .pad2{
        padding-right: 0.5%;
        padding-left: 0.5%;
    }
    .pad3{
        padding-right: 0%;
        padding-left: 0.5%;
    }
    .white{
        background: white;
        font: 700 18px Roboto;
        color: #666!important;
        height: 100px;
        text-align: left;
        padding-top: 5%;
        padding-left: 5%;
        padding-right: 5%;
    }
    .ico{
        padding-top: 12%;
        color: white;
        font:  18px Roboto;
        transition: all 0.3s ease;

    }
    .span{
        padding-bottom: 5px;
        transition: all 0.3s ease;
    }
    .span:hover {
        -webkit-transform: rotateZ(20deg);
        -ms-transform: rotateZ(20deg);
        transform: rotateZ(20deg);
        transition: all 0.3s ease;
    }
    .ico:hover{
        -webkit-transform: scale(0.95);
        -ms-transform: scale(0.95);
        transform: scale(0.95);
    }
    .btn-group a {
        display:inline-block;
    }
    #enter{
        padding-top: 15%;
    }
    #enterName {
        color: white;
        font: 18px Roboto;
    }
    #titl{
        background-color:#ff7b74;
        font: 700 30px Roboto;
        margin: 0;
        color: #fff;
        padding-top: 5px;
        padding-bottom: 5px;
    }
</style>