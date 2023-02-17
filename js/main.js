$(document).ready(() => {
    $('#searchForm').on('submit',(e)=>{
        let searchText = console.log($('#searchText').val());
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText){
    // console.log(searchText);
    axios.get('http://www.omdbapi.com/?apikey=22255093&?s='+ searchText)
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        });
}