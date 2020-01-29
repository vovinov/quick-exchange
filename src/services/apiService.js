
export default class apiService {

    
    async getResult(url) {

        const options = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
                "x-rapidapi-key": "72242015e9msh2c7f82ee85af508p1ae55fjsn096772dfe79a"
            }
        }
        const res = await fetch(url, options)        

        if (!res.ok) {
           throw new Error()
        }

        return await res.json()
    }

    async getList() {
        const res = await this.getResult('https://currency-exchange.p.rapidapi.com/listquotes')                   
        return res
    } 

    async getValue(amount, from, to) {
        const res = await this.getResult(`https://currency-exchange.p.rapidapi.com/exchange?q=${amount}&from=${from}&to=${to}`)
        return res         
    }     

    
}


// https://currency-exchange.p.rapidapi.com/exchange?q=${amount}&from=${from}&to=${to}