class Beverage{ //publication

    constructor(name, maker, dop, vol, type){
        this.name = name;

        this.maker = maker;

        if (dop === null) {
            this.dop = new Date();
        } else if (dop.includes('/')){
            const dopArray = dop.split('/');
            const year = parseInt(dopArray[2])
            const month = parseInt(dopArray[1]) - 1;
            const day = parseInt(dopArray[0])
            this.dop = new Date(year, month, day);
        } else {
            this.dop = new Date(dop);
        }

        this.vol = vol;

        this.type = type;
    }

    toString(){
        const card = 'Nome: ' + this.name + '\n' +
                     'Produttore: ' + this.maker + '\n' +
                     'Data di produzione: ' + this.dop + '\n' +
                     'Gradazione: ' + this.vol + '\n' +
                     'Tipo: ' + this.type + '\n';
        return card;
    }

}