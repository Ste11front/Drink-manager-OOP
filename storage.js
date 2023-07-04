class Storage{

    constructor(){
    }

    saveData(data){

        const dataString = JSON.stringify(data);
        
        localStorage.setItem('beverage', dataString);

    }

    loadData(){

        const dataString = localStorage.getItem('beverage')

        if (dataString) {
            const data = JSON.parse(dataString);
            return data;
        }

        return null;
    }


 }