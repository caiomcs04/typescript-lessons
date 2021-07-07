class NegotiationController{
    private _inputDate: HTMLInputElement;
    private _inputAmmount: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _negotiations = new Negotiations();
    private _negotiationView = new NegotiationView('#negotiationView');
    private _mensageView = new MensageView('#mensagemView')

    constructor(){
        this._inputDate = <HTMLInputElement>document.querySelector("#data")
        this._inputAmmount = <HTMLInputElement>document.querySelector("#quantidade")
        this._inputValue = <HTMLInputElement>document.querySelector("#valor")
        this._negotiationView.update(this._negotiations)
    }

    addNegotiation(event: Event){

        event.preventDefault()

       const negotiation = new Negotiation(
        new Date(this._inputDate.value.replace(/-/g,',')),
        parseInt(this._inputAmmount.value),
        parseFloat(this._inputValue.value)
        ); 

        this._negotiations.addNegotiation(negotiation);
        this._negotiationView.update(this._negotiations)
        this._mensageView.update("Negociação adicionada com sucesso")
   
    }
}