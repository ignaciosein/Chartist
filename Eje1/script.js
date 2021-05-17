let titulos = []
let years = []
const pelisStar = async () => {
    let res = await fetch(`https://swapi.dev/api/films/`)
    let data = await res.json();
    return data.results;
}
pelisStar().then(datas => datas.map(data => {
    saveResult(data)
}
))
const saveResult = ({ title, release_date }) => {
    titulos.push(title)
    let year = release_date.split("-")[0]
    years.push(year)
    var data = {
        // A labels array that can contain any sort of values
        labels: titulos,
        // Our series array that contains series objects or in this case series data arrays
        series: [years]
    };
    new Chartist.Line('.ct-chart', data, {
        axisY: {
            onlyInteger: true
        }
    });
}