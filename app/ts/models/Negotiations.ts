class Negotiations{
    private _negotiations: Negotiation[] = [];

    addNegotiation(negotiation: Negotiation):void{
        this._negotiations.push(negotiation)
    }

    forArray():  Negotiation[]{
        return [].concat(this._negotiations);
    }

}