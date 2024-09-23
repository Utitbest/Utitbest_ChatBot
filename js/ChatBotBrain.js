class DateTime{
    constructor(){
        let d = new Date();
        this.hour = d.getHours();
        this.minut = d.getMinutes();
        this.secon = d.getSeconds();
        this.day = d.getDay();
        this.month = d.getMonth();
        this.date = d.getDate();
        this.year = d.getFullYear();
    }
    
    getTime(){
        let t = this.hour > 12 ? 'pm' : 'am';
        let h = this.minut < 10 ? '0' +this.minut : this.minut;
        let ht = this.secon < 10 ? '0' + this.secon : this.secon;
        
        return this.hour + ':' + h + ':' + ht + t;
    }
}