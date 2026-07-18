document.querySelector('.role-dropdown').addEventListener('change', function() {
    if (this.value){
    	window.location.hash = this.value;
    }
});
