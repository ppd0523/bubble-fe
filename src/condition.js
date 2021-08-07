import * as d3 from 'd3';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {BUBBLE_URL} from './utils.js';

document.title = "조건식"

d3.select("body").classed("bg-dark", true);
const container = d3.select("body").append("div").classed("container", true);

let param = new URLSearchParams(location.search);

let today = new Date()
const filter_id = param.get("filter_id");
const filter_title = param.get("filter_title");

let title = container.append("h1")
.classed("text-light text-center mt-3", true)
.text(filter_title);
    
container.append("hr").classed("text-light", true)

const reportProm = d3.json(BUBBLE_URL.REPORT_API(filter_id, "2021-08-01"));

// reports = [
//     {stock_name: "", stock_code: "", filter_id: "", create_date: ""},
//     {stock_name: "", stock_code: "", filter_id: "", create_date: ""},
//     ...
// ]
const priceProm = reportProm.then(reports=>{
    let row = container.selectAll("nothing")
    .data(reports, d=>d.stock_code)
    .enter()
    .append("div")
    .classed("row stock", true)
    .attr("id", d=>"stock_code"+d.stock_code)

    let col = row.append("div")
    .classed("col-12 stock title", true)
    
    
    col.append("h3")
    .classed("text-light", true)
    .text(d=>d.stock_name);

    let proms = reports.map(d=>d3.json(BUBBLE_URL.PRICE_API(d.stock_code)));
    return Promise.all(proms);
});


priceProm.then(prices=>{
    console.log(prices);
    let prices_sample = [
        {
            stock_code: "000000", stock_name: "삼성전자",
            day: [{open_price: 100, high_price: 200, low_price: 50, close_price: 150, adj_close_price: 150, create_date: "2020-01-01"},
                {open_price: 100, high_price: 200, low_price: 50, close_price: 150, adj_close_price: 150, create_date: "2020-01-02"},
            ],
            week: [{open_price: 100, high_price: 200, low_price: 50, close_price: 150, adj_close_price: 150, create_date: "2020-01-01"},
            {open_price: 100, high_price: 200, low_price: 50, close_price: 150, adj_close_price: 150, create_date: "2020-01-02"},
            ],  
            month: [{open_price: 100, high_price: 200, low_price: 50, close_price: 150, adj_close_price: 150, create_date: "2020-01-01"},
            {open_price: 100, high_price: 200, low_price: 50, close_price: 150, adj_close_price: 150, create_date: "2020-01-02"},
            ]
        },
        {
            stock_code: "000001", stock_name: "LG전자",
            day: [{open_price: 100, high_price: 200, low_price: 50, close_price: 150, adj_close_price: 150, create_date: "2020-01-01"},
                {open_price: 100, high_price: 200, low_price: 50, close_price: 150, adj_close_price: 150, create_date: "2020-01-02"},
            ],
            week: [{open_price: 100, high_price: 200, low_price: 50, close_price: 150, adj_close_price: 150, create_date: "2020-01-01"},
            {open_price: 100, high_price: 200, low_price: 50, close_price: 150, adj_close_price: 150, create_date: "2020-01-02"},
            ],  
            month: [{open_price: 100, high_price: 200, low_price: 50, close_price: 150, adj_close_price: 150, create_date: "2020-01-01"},
            {open_price: 100, high_price: 200, low_price: 50, close_price: 150, adj_close_price: 150, create_date: "2020-01-02"},
            ]
        },
    ];
    let rows = d3.selectAll("div.container div.row.stock")
    .data(prices_sample);

    console.log(rows);
    
    let cols = rows
    .append("div")
    .classed("col-12 stock chart", true)
    .append("svg")
        .attr("width", "100%")
        .attr("height", "200px")
        .style("border", "1px solid black")
        .append("text")
            .text(d=>d.stock_name)
            .attr("x", "40%")
            .attr("y", "50px")
            .attr("stroke", "white")

    rows.append("div")
    .classed("col-12", true)
    .style("height", "50px");

    console.log(cols);
})