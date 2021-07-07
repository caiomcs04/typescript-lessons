class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationView = new NegotiationView('#negotiationView');
        this._mensageView = new MensageView('#mensagemView');
        this._inputDate = document.querySelector("#data");
        this._inputAmmount = document.querySelector("#quantidade");
        this._inputValue = document.querySelector("#valor");
        this._negotiationView.update(this._negotiations);
    }
    addNegotiation(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputAmmount.value), parseFloat(this._inputValue.value));
        this._negotiations.addNegotiation(negotiation);
        this._negotiationView.update(this._negotiations);
        this._mensageView.update("Negociação adicionada com sucesso");
    }
}
