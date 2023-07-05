class Cellar{ //library


    constructor(beverages = []){

        this.beverages = beverages;

    }

    addBeverage(bev) {
        this.beverages.push(bev)
    }

    deleteBeverage(index){

        this.beverages.splice(index, 1);
    }

    getAllBeverageCards(){
        
        let allCards = '';

        for (let i = 0; i < this.publications.length; i++) {
            const pub = this.publications[i]
            const humanIndex = i + 1;
            allCards += humanIndex + ') ' + pub.toString()
            allCards += '------------------------\n'
        }

        return allCards;
    }

    fromDbObjects(data){

        for (const genericObject of data) {
            const beverage = new Beverage(genericObject.name, genericObject.marker, genericObject.dop, genericObject.vol, genericObject.type);
            this.beverages.push(beverage);
        }

    }

}