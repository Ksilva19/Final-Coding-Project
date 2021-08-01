var expect = chai.expect;

describe('index.js', function() {
    describe('#deck', function() {
        it('Deck should have 52 cards', function() {
            const deck1 = new Deck()
                deck1.populate();
                
                expect(deck1.cards.length).to.equal(52);
        });

        it('Should add 26 cards to each player', function() {
            const deck2 = new Deck()
            const playerA = new Player()
            const playerB = new Player()

            expect(playerA.hand.length).to.equal(0);
            expect(playerB.hand.length).to.equal(0);
            deck2.deal(playerA, playerB)
            expect(playerA.hand.length).to.equal(26);
            expect(playerB.hand.length).to.equal(26);
        })
    });
});