const poolPromise = require('../config/database.config');

class ProductRepo{
    async getallProduct(){
        const pool = await poolPromise;
        const result = await pool.request().query('select ')
    }
}