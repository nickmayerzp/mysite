var pep=new Vue({
    el:"#Vue",
    data:{
        rep:[
            {img:"1.jpg",op:'Запеченный грейпфрут'},
            {img:"2.jpg",op:'Гренки на сковороде'},
            {img:"3.jpg",op:'Курица, запеченная с капустой'},
            {img:"4.jpg",op:'Курица, запеченная с капустой'},
            {img:"5.jpg",op:'Люля-кебаб «Дедушкины усы»'},
            {img:"6.jpg",op:'Запеканка из брокколи с сыром и грибами'},
            {img:"7.jpg",op:'Домашний «Сникерс»'},
            {img:"8.jpg",op:'Печенье «Американер»'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},
            {img:"9.jpg",op:'Свинина, запеченная в сливках'},


        ],
        search:[],
        float:'left',
        perPage:9,
        pagination:{}
    },
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
        }

    }

});

var app = new Vue({
    el: '#app',
    data: {
        company: '',
        phones: [
            {title:'1.jpg', company:'Запеченный грейпфрут'},
            {title:'2.jpg', company:'Гренки на сковороде'},
            {title:'3.jpg', company:'Курица, запеченная с капустой'},
            {title:'4.jpg', company:'Курица, запеченная с капустой'},
            {title:'5.jpg', company:'Люля-кебаб «Дедушкины усы»'},
            {title:'6.jpg', company:'Запеканка из брокколи с сыром и грибами'},
            {title:'7.jpg', company:'Домашний «Сникерс»'},
            {title:'8.jpg', company:'Печенье «Американер»'},
            {title:'9.jpg', company:'Samsung'}]
    },
    computed:{
        filteredList: function(){
            var comp = this.company;
            return this.phones.filter(function (elem) {

                if(comp==='') return true;
                else return elem.company.indexOf(comp) > -1;
            })
        }
    }
});
