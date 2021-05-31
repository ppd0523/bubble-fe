function strfdate(date){
    let year = date.getFullYear()
    let month = (1 + date.getMonth())
    month = month >= 10 ? month : '0' + month
    let day = date.getDate()
    day = day >= 10 ? day : '0' + day
    return year + '-' + month + '-' + day
}

const ORIGIN = location.origin;
const PORT= 52222;
let STOCK_URL = {
    FILTER_API : (filter_id)=>{
        let url = `${ORIGIN}:${PORT}/api/filter/`
        if (filter_id) url += `${filter_id}/`;
        return url
    },
    REPORT_API : (filter_id, date)=>{
        let url = `${ORIGIN}:${PORT}/api/filter/`
        if (filter_id && date) url += `${filter_id}/report/${date}/`
        return url
    },
    STOCK_PRICE_API : (stock_code)=>{
        `http://0.0.0.0:52222/api/stock/${stock_code}/price/`
        let url = `${ORIGIN}:${PORT}/api/stock/`
        if (stock_code) url += `${stock_code}/price/`
        return url
    },
    FILTER_DETAIL : (filter_id)=>{
        let url = `${ORIGIN}:${PORT}/filter/`
        if (filter_id) url += `?filter_id=${filter_id}`;
        return url
    },
    STOCK_DETAIL : (stock_code, stock_name)=>{
        let url = `${ORIGIN}:${PORT}/stock/`
        if(stock_code && stock_name) url += `?stock_code=${stock_code}&stock_name=${stock_name}`;
        return url
    },
}