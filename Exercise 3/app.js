new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed : {
            result() {
                return  this.value == 37 ? 'Done!' : 'Not there yet'
            }    
        },
        watch: {
            result() {
                var vm = this;
                setTimeout(function(){
                    vm.value = 0;
                },5000);
            }
        }
    });