class UI { //gui

    constructor() {

        this.storage = new Storage();
        this.cellar = new Cellar()
        const data = this.storage.loadData();
        if (data !== null) {
            this.cellar.fromDbObjects(data);
        }
        
    }

    startApp() {
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
                this.showBeverages();
            } else if (firstChoice === "2") {
                this.insertBeverage();
            } else if (firstChoice === "3") {
                this.deleteBeverage();
            } else if (firstChoice === "4") {
                break;
            } else {
                alert("hai sbagliato ad inserire l'opzione");
            }
        }
    }


    insertBeverage(){

        const name = prompt('Inserisci il nome');
        const maker = prompt('Inserisci il produttore');
        const dop = prompt('Inserisci la data di produzione nel formato gg/mm/aaaa');
        const vol = prompt('Inserisci il grado alcolico');
        const type = prompt('Inserisci il tipo');

        const beverage = new Beverage(name, maker, dop, vol, type);

        this.cellar.addBeverage(beverage);

        this.storage.saveData(this.cellar.beverage);
    }


    showBeverages(){

        const allBeverages = this.cellar.getAllBeverageCards();

        alert(allBeverages);

    }

    deleteBeverage(){

        const humanIndex = prompt('Inserisci il numero della bevanda da eliminare');
        const index = humanIndex - 1;
        this.cellar.deleteBeverage(index);

        this.storage.saveData(this.cellar.beverage);

    }



}