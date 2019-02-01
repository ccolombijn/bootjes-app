class Tocht {
  constructor( id ,boot_id, datum, start, einde ) {
    this._id = id
    this._boot_id = boot_id
    this._datum = datum
    this._start = start
    this._einde = einde
  }

  set start( tijd ){
    this._start = tijd
  }

  set einde( tijd ){
    this._einde = tijd
  }
}
module.exports = Tocht;
