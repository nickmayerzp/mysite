<template>
    <div>
        <div class="container" style="height: 90px">
            <div class="row">
                <div class="col-md-12 block" style="padding: 0%">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-3" style=" padding: 0%">
                                <a><img src="../assets/img/logo.gif" width="100%" style="padding: 10px"></a>
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

                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-lg-8 block2" style="padding: 0%">
                    <div class="container-fluid" style="padding: 0%">
                        <div clas="row">
                            <div id="titl">{{pep}}</div>
                        </div>
                    </div>
                    <div class="newrep">
                        <h2 class="new">Новые рецепты</h2>
                    </div>
                    <div class="rep">
                        <div class="container-fluid" id="blockImg ">
                            <div class="row">

                                Тут код для обраного рецепта, тягнемо по id потрібний
                            </div>
                        </div>

                        <b-pagination align="center" class="btn btn-danger" v-for="p in pagination.pages" @click.prevent="setPage(p)" v-bind:key="p.id">
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

    Vue.use(VueAxios, axios)
    export default {
        name:'repInfo',
        props:{
            id:'',
        },
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
                pep:[],

            };

        },
        mounted: function () {
            this.pep = this.rep.find((element) =>{
                return this.id === element._id;
            })
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
    };
</script>

<style scoped>

</style>