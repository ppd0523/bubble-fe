import * as d3 from 'd3';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BUBBLE_URL} from './utils.js';
import { axisBottom, ticks, xml } from 'd3';

document.title = "조건식";
d3.select("nav.navbar").style("visibility", "visible");

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

const reportProm = d3.json(BUBBLE_URL.REPORT_API(filter_id, "2021-08-09"));

// reports = [
//     {stock_name: "", stock_code: "", filter_id: "", create_date: ""},
//     {stock_name: "", stock_code: "", filter_id: "", create_date: ""},
//     ...
// ]
const priceProm = reportProm.then(reports=>{
    let rows = container.selectAll("nothing")
    .data(reports, d=>d.stock_code)
    .enter()
    .append("div")
    .classed("row stock m-1", true)
    .attr("id", d=>"stock_code"+d.stock_code)

    let proms = reports.map(d=>d3.json(BUBBLE_URL.PRICE_API(d.stock_code)));
    // let proms = reports.slice(0, 1).map(d=>d3.json(BUBBLE_URL.PRICE_API(d.stock_code)));

    let col = rows.append("div")
    .classed("col-7 stock title", true);

    col.append("h4")
    .classed("text-light", true)
    .text(d=>d.stock_name);

    // 버튼 그룹
    let btnGroup = rows.append("div")
    .classed("col-5 stock btn-group btn-group-sm", true)
    .attr("role", "group")

    let btns = btnGroup.selectAll("tempBtn")
    .data(["일", "주", "월", ""])
    .enter()
    .append("a")
        .classed("btn btn-outline-secondary text-light mb-1", true)
        .text(d=>d)
        .on("click", console.log)
    
        // 마지막 버튼 마지막을 아이콘으로
    btnGroup.select("a:last-child")
    .classed("bi bi-arrows-fullscreen", true)

    /* 일 버튼 비활성 */
    btnGroup.select("a:first-child").classed("bg-secondary", true).property("active")
    /*****************/
    
    return Promise.all(proms);
});

// stock_code 로 일-주-월봉차트 얻기
priceProm.then(prices=>{
    // console.log(prices);
    let rows = container.selectAll("div.row.stock")
    .data(prices, d=>d.stock_code)
    
    // 주가 차트
    let cols = rows
    .append("svg")
        .attr("width", "100%")
        .attr("height", "15rem")
        .style("background-color", "white")
        .style("border", "1px solid black")
        .call(chart);

    // 최근 공시 정보
    let news = rows.append("div")
    .classed("col-12", true)
    .style("height", "50px")
    
    news.append("h6")
    .classed("mt-3 text-light", true)
    .text("공시")
    
    news.append("a")
    .classed("text-light text-decoration-none", true)
    .attr("href", "#")
    .text(d=>`${d.stock_code} 기사`)

    // 아래 여백
    rows.append("div")
    .classed("col-12", true)
    .style("height", "50px")
})

function chart(selection){
    selection.each(function(data){
        let svg = d3.select(this);
        let {width, height} = this.getBoundingClientRect();
        let margin = {top: 10, bottom: 25, left: 0, right: 75};
        let len = 100;   // 차트에 보여줄 데이터 개수
        let pRatio = 0.65;   // 차트 중 가격 y축 비율
        let pHeight = Math.floor(height * pRatio);
        
        dataCleansing(data);

        // 범위 내 차트 데이터
        let target = data.days;
        let target_temp = target.slice(-len);
        
        // 도메인 범위 변수
        let pExt = d3.extent([
            d3.min(target_temp.map(d=>d.low_price)),
            d3.max(target_temp.map(d=>d.high_price))
        ]);
        let vExt = d3.extent([0, d3.max(target_temp.map(d=>d.volume))]);

        let xScaler = d3.scaleBand().range([margin.left, width-margin.right]).domain(d3.range(len)).padding(0.1);
        let pScaler = d3.scaleLinear().rangeRound([pHeight, margin.top]).domain(pExt);
        let vScaler = d3.scaleLinear().rangeRound([height-margin.bottom, pHeight+10]).domain(vExt);

        // X축
        let xTicks = d3.axisBottom(xScaler)
        .tickSizeOuter(0)
        .tickValues(d3.range(0,len,5))
        let xAxis = svg.append("g")
        .classed("xAxis axis", true)
        .attr("transform", `translate(0, ${height-margin.bottom})`)
        .call(xTicks);

        // Price 축
        let pTicks = d3.axisRight(pScaler)
        .ticks(5)
        .tickSizeOuter(0);
        let pAxis = svg.append("g")
        .classed("pAxis axis", true)
        .attr("transform", `translate(${width-margin.right},0)`)
        .call(pTicks);

        // Volume 축
        let vTicks = d3.axisRight(vScaler)
        .ticks(3)
        .tickFormat(d=>{
            if((d/1000)>=1) d=d/1000+"K";
            return d;
        })
        .tickSizeOuter(0);
        let vAxis = svg.append("g")
        .classed("vAxis axis", true)
        .attr("transform", `translate(${width-margin.right},0)`)
        .call(vTicks);

        // 차트 영역 그룹
        let sliceGroup = svg.append("g")
        .classed("slices", true)
        
        // 구간 그룹자
        let slices = sliceGroup.selectAll("g")
        .data(target_temp)
        .join("g")
        .classed("slice", true)
        
        // 투명 구간 블록
        let blocks = slices.append("rect")
        .classed("slice block", true)
        .attr("x", (d,i)=>xScaler(i))
        .attr("width", xScaler.bandwidth())
        .attr("height", height-margin.bottom-margin.top)
        .attr("fill", "transparent")

        // 캔들 피뢰침
        let pins = slices.append("line")
        .classed("slice block pin", true)
        .attr("x1", (d,i)=>xScaler(i)+xScaler.bandwidth()/2)
        .attr("x2", (d,i)=>xScaler(i)+xScaler.bandwidth()/2)
        .attr("y1", d=>pScaler(d.low_price))
        .attr("y2", d=>pScaler(d.high_price))
        .attr("stroke", d=>{
            let color = "black";
            if(d.close_price > d.open_price) color = "red";
            else if (d.close_price < d.open_price) color = "blue";
            return color;
        });

        // 캔들 블록
        let candles = slices.append("rect")
        .classed("slice block candle", true)
        .attr("x", (d,i)=>xScaler(i))
        .attr("width", xScaler.bandwidth())
        .call(function(selection){
            selection.each(function(data){
                // 캔들 색, 위치
                let ele = d3.select(this)
                let color = "black";
                let y = pScaler(data.close_price);
                if(data.close_price > data.open_price){
                    // 양봉
                    color = "red";
                    y = pScaler(data.close_price);
                } else if (data.close_price < data.open_price){
                    // 음봉
                    color = "blue";
                    y = pScaler(data.open_price);
                }
                ele.attr("fill", color);
                ele.attr("y", y);

                // 캔들 길이
                let height = Math.abs(pScaler(data.close_price)-pScaler(data.open_price));
                if (height == 0) height = 1;
                ele.attr("height", height);
            });
        });

        // 차트 경계선
        // svg.append("line")
        // .attr("x1", margin.left)
        // .attr("y1", pHeight)
        // .attr("x2", width-margin.right)
        // .attr("y2", pHeight)
        // .attr("stroke", "black")
        // .attr("stoke-width", 1.5)
        
        // 차트 경계선
        svg.append("path")
        .attr("d", `M${margin.left},${pHeight}H${width-margin.right}`)
        .attr("stroke", "currentColor")

        // 볼륨 블록
        let transactions = slices.append("rect")
        .classed("slice block transaction", true)
        .attr("x", (d,i)=>xScaler(i))
        .attr("y", d=>vScaler(d.volume))
        .attr("width", xScaler.bandwidth())
        .attr("height", d=>vScaler(0)-vScaler(d.volume))
        .attr("fill", d=>{
            let color = "black";
            if(d.close_price > d.open_price) color = "red";
            else if (d.close_price < d.open_price) color = "blue";
            return color;
        })

    })
}

function dataCleansing(data){
    data.days = JSON.parse(data.days);
    data.days = data.days.map(d=>{
        d.create_date = new Date(d.create_date);
        return d;
    })
    data.weeks = JSON.parse(data.weeks);
    data.days = data.days.map(d=>{
        d.create_date = new Date(d.create_date);
        return d;
    })
    data.months = JSON.parse(data.months);
    data.days = data.days.map(d=>{
        d.create_date = new Date(d.create_date);
        return d;
    })
}