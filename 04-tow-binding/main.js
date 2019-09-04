var vueInstance = new Vue({
    el : "#app",
    data: {
        name : '',
        isActive : true,
        isError: false,
        color : 'red',
        fontsize: 20,
        bg: 'https://www.w3schools.com/howto/img_snow.jpg'
    },
    methods: {
        changeColor(){
            return this.isActive = !this.isActive;
        }
    },
    computed : {
        objClass(){
            return { 
                active: this.isActive, 
                error: this.isError 
            }
        },
        objStyle(){
            return {
                //backgroundImage = background-image trong css
                backgroundImage: 'url(' +  this.bg + ' )'
            }
        }
    }
});