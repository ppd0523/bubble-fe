d3.select("body").insert("div", "script").classed("container", true);

let price_objs = [
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 80000, close_price: 82000,
        high_price: 84000, adjust_price: 82000, volume: 10000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 81000, open_price: 82000, close_price: 83000,
        high_price: 85000, adjust_price: 83000, volume: 9900
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 82000, open_price: 83000, close_price: 84000,
        high_price: 86000, adjust_price: 84000, volume: 11000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 82000, open_price: 83000, close_price: 83000,
        high_price: 84000, adjust_price: 83000, volume: 9800
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 81500, open_price: 83000, close_price: 82000,
        high_price: 83500, adjust_price: 82000, volume: 10000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 77000, open_price: 82000, close_price: 78000,
        high_price: 83500, adjust_price: 78000, volume: 9800
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 68000, open_price: 77000, close_price: 73000,
        high_price: 78000, adjust_price: 73000, volume: 10000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 65000, open_price: 72000, close_price: 71000,
        high_price: 73000, adjust_price: 71000, volume: 10200
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 65000, open_price: 71000, close_price: 73000,
        high_price: 74000, adjust_price: 73000, volume: 10300
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 72500, open_price: 73000, close_price: 74000,
        high_price: 76000, adjust_price: 74000, volume: 10500
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 74000, open_price: 75000, close_price: 78000,
        high_price: 79000, adjust_price: 78000, volume: 10600
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 78000, close_price: 76500,
        high_price: 79000, adjust_price: 76500, volume: 10800
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 76000, close_price: 75500,
        high_price: 77000, adjust_price: 75500, volume: 10500
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 76000, close_price: 78000,
        high_price: 79000, adjust_price: 78000, volume: 10200
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 78000, close_price: 78000,
        high_price: 80500, adjust_price: 78000, volume: 10300
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 77000, open_price: 78000, close_price: 80000,
        high_price: 81500, adjust_price: 80000, volume: 10200
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 79000, open_price: 81000, close_price: 83000,
        high_price: 83000, adjust_price: 83000, volume: 10300
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 83500, open_price: 84000, close_price: 86000,
        high_price: 88000, adjust_price: 86000, volume: 10500
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 80000, close_price: 82000,
        high_price: 84000, adjust_price: 82000, volume: 10000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 81000, open_price: 82000, close_price: 83000,
        high_price: 85000, adjust_price: 83000, volume: 9900
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 82000, open_price: 83000, close_price: 84000,
        high_price: 86000, adjust_price: 84000, volume: 11000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 82000, open_price: 83000, close_price: 83000,
        high_price: 84000, adjust_price: 83000, volume: 9800
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 81500, open_price: 83000, close_price: 82000,
        high_price: 83500, adjust_price: 82000, volume: 10000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 77000, open_price: 82000, close_price: 78000,
        high_price: 83500, adjust_price: 78000, volume: 9800
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 68000, open_price: 77000, close_price: 73000,
        high_price: 78000, adjust_price: 73000, volume: 10000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 65000, open_price: 72000, close_price: 71000,
        high_price: 73000, adjust_price: 71000, volume: 10200
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 65000, open_price: 71000, close_price: 73000,
        high_price: 74000, adjust_price: 73000, volume: 10300
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 72500, open_price: 73000, close_price: 74000,
        high_price: 76000, adjust_price: 74000, volume: 10500
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 74000, open_price: 75000, close_price: 78000,
        high_price: 79000, adjust_price: 78000, volume: 10600
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 78000, close_price: 76500,
        high_price: 79000, adjust_price: 76500, volume: 10800
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 76000, close_price: 75500,
        high_price: 77000, adjust_price: 75500, volume: 10500
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 76000, close_price: 78000,
        high_price: 79000, adjust_price: 78000, volume: 10200
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 78000, close_price: 78000,
        high_price: 80500, adjust_price: 78000, volume: 10300
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 77000, open_price: 78000, close_price: 80000,
        high_price: 81500, adjust_price: 80000, volume: 10200
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 79000, open_price: 81000, close_price: 83000,
        high_price: 83000, adjust_price: 83000, volume: 10300
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 83500, open_price: 84000, close_price: 86000,
        high_price: 88000, adjust_price: 86000, volume: 10500
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 80000, close_price: 82000,
        high_price: 84000, adjust_price: 82000, volume: 10000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 81000, open_price: 82000, close_price: 83000,
        high_price: 85000, adjust_price: 83000, volume: 9900
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 82000, open_price: 83000, close_price: 84000,
        high_price: 86000, adjust_price: 84000, volume: 11000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 82000, open_price: 83000, close_price: 83000,
        high_price: 84000, adjust_price: 83000, volume: 9800
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 81500, open_price: 83000, close_price: 82000,
        high_price: 83500, adjust_price: 82000, volume: 10000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 77000, open_price: 82000, close_price: 78000,
        high_price: 83500, adjust_price: 78000, volume: 9800
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 68000, open_price: 77000, close_price: 73000,
        high_price: 78000, adjust_price: 73000, volume: 10000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 65000, open_price: 72000, close_price: 71000,
        high_price: 73000, adjust_price: 71000, volume: 10200
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 65000, open_price: 71000, close_price: 73000,
        high_price: 74000, adjust_price: 73000, volume: 10300
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 72500, open_price: 73000, close_price: 74000,
        high_price: 76000, adjust_price: 74000, volume: 10500
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 74000, open_price: 75000, close_price: 78000,
        high_price: 79000, adjust_price: 78000, volume: 10600
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 78000, close_price: 76500,
        high_price: 79000, adjust_price: 76500, volume: 10800
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 76000, close_price: 75500,
        high_price: 77000, adjust_price: 75500, volume: 10500
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 76000, close_price: 78000,
        high_price: 79000, adjust_price: 78000, volume: 10200
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 78000, close_price: 78000,
        high_price: 80500, adjust_price: 78000, volume: 10300
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 77000, open_price: 78000, close_price: 80000,
        high_price: 81500, adjust_price: 80000, volume: 10200
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 79000, open_price: 81000, close_price: 83000,
        high_price: 83000, adjust_price: 83000, volume: 10300
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 83500, open_price: 84000, close_price: 86000,
        high_price: 88000, adjust_price: 86000, volume: 10500
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 80000, close_price: 82000,
        high_price: 84000, adjust_price: 82000, volume: 10000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 81000, open_price: 82000, close_price: 83000,
        high_price: 85000, adjust_price: 83000, volume: 9900
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 82000, open_price: 83000, close_price: 84000,
        high_price: 86000, adjust_price: 84000, volume: 11000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 82000, open_price: 83000, close_price: 83000,
        high_price: 84000, adjust_price: 83000, volume: 9800
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 81500, open_price: 83000, close_price: 82000,
        high_price: 83500, adjust_price: 82000, volume: 10000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 77000, open_price: 82000, close_price: 78000,
        high_price: 83500, adjust_price: 78000, volume: 9800
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 68000, open_price: 77000, close_price: 73000,
        high_price: 78000, adjust_price: 73000, volume: 10000
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 65000, open_price: 72000, close_price: 71000,
        high_price: 73000, adjust_price: 71000, volume: 10200
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 65000, open_price: 71000, close_price: 73000,
        high_price: 74000, adjust_price: 73000, volume: 10300
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 72500, open_price: 73000, close_price: 74000,
        high_price: 76000, adjust_price: 74000, volume: 10500
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 74000, open_price: 75000, close_price: 78000,
        high_price: 79000, adjust_price: 78000, volume: 10600
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 78000, close_price: 76500,
        high_price: 79000, adjust_price: 76500, volume: 10800
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 76000, close_price: 75500,
        high_price: 77000, adjust_price: 75500, volume: 10500
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 76000, close_price: 78000,
        high_price: 79000, adjust_price: 78000, volume: 10200
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 75000, open_price: 78000, close_price: 78000,
        high_price: 80500, adjust_price: 78000, volume: 10300
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 77000, open_price: 78000, close_price: 80000,
        high_price: 81500, adjust_price: 80000, volume: 10200
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 79000, open_price: 81000, close_price: 83000,
        high_price: 83000, adjust_price: 83000, volume: 10300
    },
    {
        stock_code: '000001', stock_name: '삼성전자',
        low_price: 83500, open_price: 84000, close_price: 86000,
        high_price: 88000, adjust_price: 86000, volume: 10500
    },
]
today = new Date();
for(let i in price_objs){
    price_objs[i].create_date = d3.timeDay.offset(new Date(2021, 6, 15, 0), i)
}


CandleChart(price_objs, 300, 300);

function CandleChart(price_objs, chart_width, chart_height){
    let _stock_name = price_objs[0].stock_name
    let _stock_code = price_objs[0].stock_code
    
    let card = d3.select(".container")
    .append("div")
    .classed("card", true)
    .attr("data-stock-name", _stock_name)
    .attr("data-stock-code", _stock_code)
    .attr("margin-top", 0)

    let title = card.append("div")
    .classed("title text", true)
    .style("position", "relative")

    title.append("h3")
    .text(_stock_name)
    
    let width = chart_width;
    let height = chart_height;
    let margin = {top:10, left:5, bottom:25, right:50};
    let svg = card.append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0,0, width, height])
    .style("border", "1px solid black")

    // X Date Scaler
    let numOfBar = 20
    let dateLength = price_objs.length < numOfBar ? price_objs.length : numOfBar;
    let bandwidth = (chart_width - margin.left - margin.right)/dateLength;

    let beginDate = price_objs.length > 0 ? price_objs[0].create_date : new Date();
    let endDate = d3.timeDay.offset(beginDate, price_objs.length < numOfBar ? price_objs.length : numOfBar )
    let xScaler = d3.scaleTime().range([0, width-margin.left-margin.right]).domain([beginDate, endDate])

    let price_data = []
    price_objs.map(d=>{
        price_data.push(d.low_price);
        price_data.push(d.high_price);
        price_data.push(d.adjust_price);
    })
    
    // Price Scaler
    let price_range = d3.extent(price_data)
    let priceRatio = 0.75
    let priceScaler = d3.scaleLinear().range([height*priceRatio, margin.top]).domain(price_range)

    // Volume Scaler
    let volume_range = d3.extent(price_objs, d=>d.volume)
    let volumeScaler = d3.scaleLinear().range([height-margin.bottom, height*priceRatio+15]).domain([0, volume_range[1]])

    // x-price-grid
    let xAxis_price_grid = svg.append("g").classed("axis x-axis x-grid price-grid", true)
    .selectAll("line")
    .data(priceScaler.ticks())
    .join("line")
    .attr("x1", 0)
    .attr("y1", d=>(priceScaler(d)+0.25))
    .attr("x2", width-margin.right)
    .attr("y2", d=>(priceScaler(d)+0.25))
    .attr("stroke", "black")
    .attr("stroke-width", 0.25)
    .style("display", (d,i)=>{
        return i%2 == 0 ? "hidden" : "none";
    })

    let sliceGroup = svg.append("g").classed("slice", true);
    let slices = sliceGroup.selectAll("g").data(price_objs).join("g")
    .classed("slice bar", true)
    // .on("mouseenter", function(e, d){d3.select(this).selectAll("*").attr("opacity", "0.5")})
    // .on("mouseout", function(e, d){d3.select(this).selectAll("*").attr("opacity", "1")})

    let sliceBar = slices.append("rect").classed("slice bar background", true)
    .attr("x", d=>xScaler(d.create_date))
    .attr("width", bandwidth)
    .attr("height", height)
    .attr("fill", "transparent")

    // Price(candle) bar
    let priceBar = slices.append("rect").classed("slice bar price candle", true)
    .attr("x", d=>xScaler(d.create_date))
    .attr("y", d=>{
        let top = d.open_price > d.adjust_price? d.open_price : d.adjust_price;
        return priceScaler(top)
    })
    .attr("width", bandwidth)
    .attr("height", d=>{
        let height = Math.abs(priceScaler(d.open_price)-priceScaler(d.adjust_price))
        if(height == 0) return 1
        else return height
    })
    .attr("stroke", "black")
    .attr("stroke-width", 0.5)
    .attr("fill", d=>{
        if(d.open_price == d.adjust_price) return "black"
        else if(d.open_price < d.adjust_price) return "red"
        else return "blue"
    })

    // Pin bar
    let pinBar = slices.append("rect").classed("slice bar price pin", true)
    .attr("x", d=>(xScaler(d.create_date)+bandwidth/2))
    .attr("y", d=>priceScaler(d.high_price))
    .attr("width", 1)
    .attr("height", d=>{
        const height = priceScaler(d.low_price)-priceScaler(d.high_price)
        return height == 0 ? 1 : height;
    })
    .attr("fill", d=>{
        if(d.open_price == d.adjust_price) return "black"
        else if(d.open_price < d.adjust_price) return "red"
        else return "blue"
    })

    // Volume bar
    let volumeBar = slices.append("rect").classed("slice bar volume", true)
    .attr("x", d=>xScaler(d.create_date))
    .attr("y", d=>volumeScaler(d.volume))
    .attr("width", bandwidth)
    .attr("height", d=>(volumeScaler(0)-volumeScaler(d.volume)))
    .attr("fill", d=>{
        if(d.open_price == d.adjust_price) return "black"
        else if(d.open_price < d.adjust_price) return "red"
        else return "blue"
    })
    .attr("stroke", "black")
    .attr("stroke-width", 0.5)

    // X Axis
    let xAxis_func = d3.axisBottom(xScaler).tickFormat(d3.timeFormat('%m/%d')).ticks(d3.timeWeek)
    let xAxis = svg.append("g").classed("axis x-axis", true)
    .attr("transform", `translate(0,${height-margin.bottom})`)
    .call(xAxis_func)

    // Y Axis background
    let yAxis_background = svg.append("g").classed("axis y-axis background", true)
    .attr("transform", `translate(${width - margin.right}, 0)`)

    // Y Price Axis
    let yAxis_price_func = d3.axisRight(priceScaler).tickSize(0)
    let yAxis_price = svg.append("g").classed("axis y-axis price-axis", true)
    .attr("transform", `translate(${width-margin.right},0)`)
    .call(yAxis_price_func)

    // Y Volume Axis
    let yAxis_volume_func = d3.axisRight(volumeScaler).tickSize(0).ticks(3)
    let yAxis_volume = svg.append("g").classed("axis y-axis volume-axis", true)
    .attr("transform", `translate(${width-margin.right},0)`)
    .call(yAxis_volume_func)

    let extent = [[0,0], [width, height]]
    let zoom = d3.zoom()
    .scaleExtent([1, 4])
    .translateExtent(extent)
    .extent(extent)
    .on("zoom", zoomed)

    function zoomed(event){
        const k = event.transform.k
        const x = event.transform.x
 
        // X Axis update
        let xBand = [0, width - margin.right].map(obj=>event.transform.applyX(obj))
        xScaler.range(xBand)
        xAxis_func = d3.axisBottom(xScaler).tickFormat(d3.timeFormat('%m/%d')).ticks(d3.timeWeek)
        xAxis.call(xAxis_func)

        let newBandwidth = bandwidth * event.transform.k
        let beginIdx = Math.ceil(-x/newBandwidth)
        if(beginIdx <= 0) beginIdx = 0
        else beginIdx -= 1;
        let endIdx = Math.ceil((-x+(width - margin.left - margin.right))/newBandwidth)
        if(endIdx <= 0) endIdx = 0
        else endIdx -= 1;

        let priceRange = []
        let maxVolume = 0
        for(let i=beginIdx; i<=endIdx; ++i){
            priceRange.push(price_objs[i].low_price);
            priceRange.push(price_objs[i].high_price);
            
            if(maxVolume < price_objs[i].volume)
                maxVolume = price_objs[i].volume
        }
        const priceExt = d3.extent(priceRange)
        priceScaler.domain(priceExt)
        yAxis_price_func = d3.axisRight(priceScaler).tickSize(0)
        yAxis_price.call(yAxis_price_func)
        
        volumeScaler.domain([0, maxVolume])
        yAxis_volume_func = d3.axisRight(volumeScaler).tickSize(0).ticks(3)
        yAxis_volume.call(yAxis_volume_func)


        priceBar
        .attr("x", d=>xScaler(d.create_date))
        .attr("y", d=>{
            const top = d.open_price > d.adjust_price? d.open_price : d.adjust_price;
            return priceScaler(top)
        })
        .attr("width", newBandwidth)
        .attr("height", d=>{
            const height = Math.abs(priceScaler(d.open_price)-priceScaler(d.adjust_price))
            if(height == 0) return 1
            else return height
        })
        
        pinBar
        .attr("x", d=>(xScaler(d.create_date)+newBandwidth/2))
        .attr("y", d=>priceScaler(d.high_price))
        .attr("height", d=>{
            const height = priceScaler(d.low_price)-priceScaler(d.high_price)
            return height == 0 ? 1 : height;
        })
        
        volumeBar
        .attr("x", d=>xScaler(d.create_date))
        .attr("y", d=>volumeScaler(d.volume))
        .attr("width", newBandwidth)
        .attr("height", d=>(volumeScaler(0)-volumeScaler(d.volume)))
    }

    svg.call(zoom)
    // .call(zoom.transform, d3.zoomIdentity.translate(0, 0).scale(1))
}
