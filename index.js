const moment = require('moment')
const Boot = require('./class/boot')
const Tocht = require('./class/tocht')
const Klant = require('./class/klant')
const Weer = require('./class/weer')
const Rekening = require('./class/rekening')
const kaartenbak = []
const bootjes = [
  { id : 1, bezet : false },
  { id : 2, bezet : false },
  { id : 3, bezet : false },
  { id : 4, bezet : false },
  { id : 5, bezet : false },
  { id : 6, bezet : false },
  { id : 7, bezet : false },
  { id : 8, bezet : false },
  { id : 9, bezet : false }
]
const randomId = () => Math.floor(Math.random() * (99999 - 0 + 1));


function beschikbareBoot(){
  for( let bootje of bootjes ){
    if( !bootje.bezet ) return bootje
  }
}

function huidigeDatum(){
  let datum = new Date(),
  dd = datum.getDate(),
  mm = datum.getMonth() + 1,
  yyyy = datum.getFullYear();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  return dd + '/' + mm + '/' + yyyy;

}
function huidigeTijd(){
  const datum = new Date(),
  hh = datum.getHours(),
  mm = datum.getMinutes();
  return `${hh}:${mm}`
}

function verschilTijd( begin, einde ) {

  var verschil =((new Date(einde)).getTime() -(new Date(begin)).getTime()) / 1000;
  verschil /= 60;
  return Math.abs(Math.round( verschil ));

 }

function bootjeBezet( id ){
  for( let i = 0; i < bootjes.length; i++ ) {
    if( bootjes[ i ].id === id ) {
      bootjes[ i ].bezet = true
    }
  }
}

function bootjeVrij( id ){
  for( let i = 0; i < bootjes.length; i++ ) {
    if( bootjes[ i ].id === id ) {
      bootjes[ i ].bezet = false
    }
  }
}

function startTocht(){
  let bootjeTocht = beschikbareBoot().id
  bootjeTochtNr = randomId() // nr van boottocht
  bootjeBezet( bootjeTocht ) // markeer bootje als bezet
  let tocht = new Tocht( bootjeTochtNr , bootjeTocht, huidigeDatum() , huidigeTijd(), undefined  ) // initieer nieuwe tocht
  kaartenbak.push( tocht ) // voeg tocht toe aan kaartenbak
  return bootjeTochtNr
}

function eindeTocht( id ){
  for( let i = 0; i < kaartenbak.length; i++ ){
    if( kaartenbak.id === id ){
      kaartenbak[ i ].einde = huidigeTijd()
      let duur = moment.duration(kaartenbak[ i ].einde.diff(kaartenbak[ i ].start));
      return `${kaartenbak[ i ].datum}; ${duur} min`
    }
  }
}



console.log( moment().format('HH:mm') )
