const negotiation = new NegotiationController()

document
.querySelector('.form')
.addEventListener('submit', negotiation.addNegotiation.bind(negotiation))