var vueInstance = new Vue({
    el: "#app",
    data: {
        a: 0,
        b: 0,
        number: 20
    },
    methods : {
        //Đặt trong method khi click button A thì cả 2 A và B đều chạy : không được
        // addA() {
        //     console.log('AddA')
        //     return this.a + this.number
        // },
        // addB() {
        //     console.log('AddB')
        //     return this.b + this.number
        // }
    },
    computed : {
        //dùng computed
        addA() {
            console.log('AddA')
            return this.a + this.number
        },
        addB() {
            console.log('AddB')
            return this.b + this.number
        }
    }
});