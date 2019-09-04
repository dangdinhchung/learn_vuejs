var vueInstance = new Vue({
    el : "#app",
    data: {
        //data binding : v-bind
        title : "Áo đẹp 2019",
        href: "https://vuejs.org/v2/guide/instance.html",
        target : "_blank",
        price : 10000,
        counter : 0
    },
    methods : {
        formatPrice(){
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        handleClick(number, event) {
            console.log(event);
            this.counter += number
        },
        handleSubmit(){
            console.log(e);
        }
    }
});