class DrinkGUI {
    constructor() {
        this.cellar = new Cellar();

    }
    start() {
        while (true) {
            
            const firstChoice = prompt(
                    "Hai 4 opzioni:\n" +
                    "1)Guarda la lista delle bevande\n" +
                    "2)Aggiungi una bevanda\n" +
                    "3)Rimuovi una bevanda\n" +
                    "4)Esci dal programma\n" +
                    "Inserisci il numero dell'operazione"
            );
  
            if (firstChoice === "1") {
                //this.showBooks();
            } else if (firstChoice === "2") {
                const secondChoice = prompt(
                    "Hai 2 opzioni:\n" +
                    "1)Inserisci una birra\n" +
                    "2)Inserisci un vino\n" +
                    "Inserisci il numero dell'operazione");

                    if (secondChoice === '1') {
                        this.insertBeer();
                    } else if (secondChoice === 2){
                        this.insertWine();
                    } else {
                        alert("hai sbagliato ad inserire l'opzione");
                    }
            } else if (firstChoice === "3") {
               // this.deleteBook();
            } else if (firstChoice === "4") {
                break;
            } else {
                alert("hai sbagliato ad inserire l'opzione");
            }
        }
    }
    insertBeer(){
        
    }

    insertWine(){
        
    }
}