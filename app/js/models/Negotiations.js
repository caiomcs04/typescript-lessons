class Negotiations {
    constructor() {
        this._negotiations = [];
    }
    addNegotiation(negotiation) {
        this._negotiations.push(negotiation);
    }
    forArray() {
        return [].concat(this._negotiations);
    }
}
