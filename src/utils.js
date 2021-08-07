const BUBBLE_URL = {
    ORIGIN: "http://localhost:80",
    FILTER_API(filter_id){
        let url = this.ORIGIN + "/api/filter/";
        if(filter_id) url += filter_id;
        return url;
    },
    REPORT_API(filter_id, date){
        return this.ORIGIN + `/api/filter/${filter_id}/report/${date}/`;
    },
    PRICE_API(stock_code){
        return this.ORIGIN + `/api/stock/${stock_code}/price/`;
    },
    INDEX(){
        return "/index.html"
    },
    STOCK(stock_code, stock_name){
        return `/stock.html?stock_code=${stock_code}&stock_name=${stock_name}`;
    },
    FILTER(filter_id, filter_title){
        return `/condition.html?filter_id=${filter_id}&filter_title=${filter_title}`;
    },

}

export {BUBBLE_URL, };