import * as d3 from 'd3';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import BUBBLE_URL from './utils.js';

document.title = "종목"

d3.select("body").classed("bg-dark", true);
const container = d3.select("body").append("div").classed("container", true);

let param = new URLSearchParams(location.search);

let today = new Date()
const stock_code = param.get("stock_code");
const stock_name = param.get("stock_name");

let title = container.append("h1")
.classed("text-light text-center mt-3", true)
.text(stock_name);
    
container.append("hr").classed("text-light", true)

// const stockProm = d3.json(BUBBLE_URL.STOCK(stock_code, stock_name));