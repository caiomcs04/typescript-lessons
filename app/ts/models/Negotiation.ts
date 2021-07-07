class Negotiation{

    constructor(private _date: Date, private _ammount: number, private _value: number){}


    get date(){
        return this._date;
    }

    get ammount(){
        return this._ammount;
    }

    get value(){
        return this._value;
    }

    get volume(){
        return this._ammount * this._value;
    }
}