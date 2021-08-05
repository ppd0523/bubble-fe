import * as d3 from 'd3';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

document.title = "버블스탁";

const BUBBLE_URL = {
    ORIGIN: "http://localhost:80",
    FILTER_API(filter_id){
        let url = this.ORIGIN + "/api/filter/"
        if(filter_id) url += filter_id
        return url;
    },
    REPORT_API(filter_id, date){
        return this.ORIGIN +`/api/filter/${filter_id}/report/${date}/`;
    },
    STOCK_API(stock_code){
        return "http://localhost:80" +`/stock/${stock_code}/`;
    },
    STOCK(stock_code, stock_name){
        let url = "http://localhost:8080" + `/stock.html?stock_code=${stock_code}&stock_name=${stock_name}`
        return url;
    },
    FILTER(filter_id, filter_title){
        let url = "http://localhost:8080" + `/condition.html?filter_id=${filter_id}&filter_name=${filter_title}`
        return url;
    },

}
d3.select("body").classed("bg-dark", true);
const container = d3.select("body").append("div").classed("container", true);

const filterProm = d3.json(BUBBLE_URL.FILTER_API());

const reportProms = filterProm.then(objs=>{
    container.selectAll("div")
    .data(objs, obj=>obj.filter_id)
    .join("div")
        .classed("filter row mt-3", true)
        .attr("id", obj=>obj.filter_id)
        .append("h1")
            .classed("filter filter_title text-light", true)
            .text(obj=>obj.filter_title)
            .on("click", function(e, d){
                location.href = BUBBLE_URL.FILTER(d.filter_id, d.filter_title)
                console.log(d);
            })
            .append("hr")

    let proms = objs.map(obj=>d3.json(BUBBLE_URL.REPORT_API(obj.filter_id, "2021-08-01")))
    return Promise.all(proms);
});

reportProms.then(reportsByFilter=>{
    reportsByFilter.forEach((reports)=>{
        console.log(reports);
        let ul = d3.create("ul").classed("list-inline", true);
        for(const report of reports){
            ul.attr("id", report.filter_id)
            .append("li")
            .classed("report stock list-inline-item m-1", true)
            .append("a")
                .classed("text-decoration-none fs-5 link-secondary", true)
                .attr("href", BUBBLE_URL.STOCK(report.stock_code, report.stock_name))
                .text(report.stock_name)
        }
        const ul_id = ul.attr("id");
        console.log(ul_id);
        if(ul_id){
            ul.attr("id", null);
            d3.select(`[id='00${ul_id}']`).append(()=>ul.node());
        }
    })
})

function initCard(selection){
    selection.each(function(data){
        let col = d3.select(this)
        .append("div")
        .classed("col", true)
        
        col
        .classed("", true)
        .text(data.filter_title);
    })
}
