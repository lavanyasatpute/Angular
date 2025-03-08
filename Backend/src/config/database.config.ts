const sql = require('mssql');
const fs = require('fs');

const config = {
    user:"j2",
    password:"123456",
    server:"dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com",
    port:1982,
    database:"JiBe_Main_Training",
    options:{
        encrypt:false,
        trustServerCertificate:true
    }
}

const poolPromise = new sql.ConnectionPool(config).connect().then((pool:any) => {
    console.log("Connected to SQL Server");
    return pool;
    
}).catch((err:any) => console.error("Database connection failed",err));

const products = [
    { id: 1, PName: "Laptop", PCategory: "Electronics", PPrice: 1200, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/laptop.jpg" },
    { id: 2, PName: "Smartphone", PCategory: "Electronics", PPrice: 800, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/smartphone.jpg" },
    { id: 3, PName: "Coffee Maker", PCategory: "Home Appliances", PPrice: 150, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/coffeemaker.jpg" },
    { id: 4, PName: "Headphones", PCategory: "Electronics", PPrice: 200, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/headphones.jpg" },
    { id: 5, PName: "Blender", PCategory: "Home Appliances", PPrice: 100, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/blender.jpg" },
    { id: 6, PName: "Smartwatch", PCategory: "Electronics", PPrice: 250, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/smartwatch.jpg" },
    { id: 7, PName: "Microwave", PCategory: "Home Appliances", PPrice: 300, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/microwave.jpg" },
    { id: 8, PName: "Camera", PCategory: "Electronics", PPrice: 900, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/camera.jpg" },
    { id: 9, PName: "Vacuum Cleaner", PCategory: "Home Appliances", PPrice: 400, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/vacuum.jpg" },
    { id: 10, PName: "Air Purifier", PCategory: "Home Appliances", PPrice: 350, PImage: "/Users/LavanyaSatputeINDev/Documents/Lavanya/Backend/public/airpurifier.jpg" }
];
// poolPromise.request().input()
products.forEach(async (product) => {
    const imageData = await fs.readFileSync(product.PImage);
    const bufImageData = await Buffer.from(imageData)
    // const sql = ' (?, ?, ?, ?, ?)';
    await poolPromise.request()
    .input('id',product.id)
    .input('PName',product.PName)
    .input('PCategory',product.PCategory)
    .input('PPrice',product.PPrice)
    .input('PImage',bufImageData)
    .query('INSERT INTO product2008 (Product_id, PName, PCategory, PPrice, PImage) VALUES (@id, @PName, @PCategory, @PPrice, @PImage)');
});

module.exports = {poolPromise};

export {};