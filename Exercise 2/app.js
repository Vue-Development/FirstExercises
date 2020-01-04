new Vue({
  el: "#exercise",
  data: {
    value: ""
  },
  methods: {
    alertMe() {
      alert("Clicked!");
    },
    // storeValue(event){
    //     this.value= event.target.value;
    // }
  }
});
