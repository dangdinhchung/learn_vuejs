var vueInstance = new Vue({
    el : "#app",
    data: {
        title : "Hello chung"
    },
    methods : {
        say : function(text){
            return 'Hello' + text
        }
    }
});
console.log(vueInstance);
