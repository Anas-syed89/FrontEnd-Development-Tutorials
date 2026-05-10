let  bike_location = [
    {brand_name: "Honda", color:"black", No:4265},
    {brand_name: "Unique", color:"White", No:4685},
    {brand_name: "SuperStar", color:"black", No:8623},
    {brand_name: "KPI", color:"White", No:9654},
]

for (let data of bike_location){
    document.writeln(data.brand_name,"<br>")
    document.writeln(data.color,"<br>")
    document.writeln(data.No,"<br>")
}