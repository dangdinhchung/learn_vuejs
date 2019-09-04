var vueInstance = new Vue({
    el: "#app",
    data: {
        tabSelected : 'login'
    },
    methods: {
        changeSelected(tab){
            this.tabSelected = tab
        }
    }
});