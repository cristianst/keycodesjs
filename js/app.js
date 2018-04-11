var app = new Vue({
    el: '#app',
    data: {
        keyCode: 'keycodesjs',
        keyName: 'cmon press a key :) '
    },
    mounted(){
        window.addEventListener("keypress", e => {
        //if(e.metaKey) e.preventDefault();
        this.keyName = e.keyCode === 32 ? "Space" : e.key; // Space will lead in a -> " "
        this.keyCode = e.keyCode;
        });
    }    
});