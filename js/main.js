$(document).ready(() => {
    $('#searchForm').on('submit',(e)=>{
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText){
    // console.log(searchText);
    axios.get('http://www.omdbapi.com?s='+searchText+'&apikey=22255093')
        .then((response) => {
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err);
        });
}