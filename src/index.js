import * as d3 from 'd3';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import BUBBLE_URL from './urls.js';

document.title = "버블스탁";

d3.select("body").classed("bg-dark", true);
const container = d3.select("body").append("div").classed("container", true);

const filterProm = d3.json(BUBBLE_URL.FILTER_API());

const reportProms = filterProm.then(objs=>{
    let rows = container.selectAll("div")
    .data(objs, d=>d.filter_id)
    .join("div")
        .classed("filter row mt-3", true)
        .attr("id", d=>"filter_id"+d.filter_id)
        .on("click", function(e, d){
            location.href = BUBBLE_URL.FILTER(d.filter_id, d.filter_title)
            console.log(d);
        });
    
    let col_10 = rows.append("div")
    .classed("col-10", true)
    .append("h1")
        .classed("filter filter_title text-light", true)
        .text(obj=>obj.filter_title)
    
    let col_2 = rows.append("div")
    .classed("col-2", true)    
    
    rows.append("hr")
    .classed("text-light", true);

    let proms = objs.map(obj=>d3.json(BUBBLE_URL.REPORT_API(obj.filter_id, "2021-08-06")))
    return Promise.all(proms);
});

// reportsByFilter 데이터는 reportProms 반환 순서에 따라 결정
reportProms.then(reportsByFilter=>{
    // console.log(reportsByFilter);

    // div.filter.row 는 reportsByFilter 와 개수가 같다
    let uls = container.selectAll("div.filter.row")
    .data(reportsByFilter)
    .append("div")
    .classed("col", true);
        
    console.log(uls);

    uls.call(function(selection){
        selection.each(function(data){
            d3.select(this).selectAll("li")
            .data(data)
            .join("li")
                .classed("list-inline-item m-1", true)
                .append("a")
                    .classed("text-decoration-none fs-5 link-secondary", true)
                    .attr("href", d=>BUBBLE_URL.STOCK(d.stock_code, d.stock_name))
                    .text(d=>d.stock_name)
        })
    })
})