let actores = []
let peliculas = []
const actoresStar = async () => {
    let res = await fetch(`https://swapi.dev/api/people/`)
    let data = await res.json();
    return data.results ;
}
actoresStar().then(datas =>  datas.map(data => { 
    saveResult(data)
}
))
const saveResult = ({name, films}) => {
    actores.push(name)
    peliculas.push(films.length)
    var data = {
        labels: actores,
        series: [ peliculas ]
      };
      new Chartist.Bar('.ct-chart', data,{ 
      axisY: {
        onlyInteger: true
      }})
}

