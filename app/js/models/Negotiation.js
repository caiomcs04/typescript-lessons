class Negotiation {
    constructor(_date, _ammount, _value) {
        this._date = _date;
        this._ammount = _ammount;
        this._value = _value;
    }
    get date() {
        return this._date;
    }
    get ammount() {
        return this._ammount;
    }
    get value() {
        return this._value;
    }
    get volume() {
        return this._ammount * this._value;
    }
}
