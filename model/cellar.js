class Cellar{ //library


    constructor(beverage = []){

        this.beverage = beverage;

    }

    addBeverage(bev) {
        this.beverage.push(bev)
    }

    deleteBeverage(index){

        this.beverage.splice(index, 1);
    }

    getAllBookCards(){
        
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
            const book = new Book(genericObject.title, genericObject.author, genericObject.dop, genericObject.publisher);
            this.publications.push(book);
        }

    }

}