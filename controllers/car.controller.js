const { request } = require('express');
const db = require('../db.js');

class carController{
    async createCar(req, res){
        const {name, description, price, img} = req.body;
        const newCar = await db.query(`INSERT INTO cars (name, description, price, img) values ($1, $2, $3, $4) RETURNING *`, [name, description, price, img]);
        res.json(newCar.rows[0]);
    }
    async getCars(req, res){
        const cars = await db.query(`SELECT * FROM cars`);
        res.json(cars.rows);
        console.log(cars.rows[0]);
    }
    async getOneCar(req, res){
        const id = req.params.id;
        const car = await db.query(`SELECT * FROM cars WHERE id = $1`, [id]);
        res.json(car.rows);
    }
    async updateCar(req, res){
        const {id, name, description, price, img} = req.body;
        const updateCar = await db.query(`UPDATE cars set name = $1, description = $2, price = $3, img = $4 WHERE id = $5 RETURNING *`, [name, description, price, img, id]);
        res.json(updateCar.rows[0]);
    }
    async deleteCar(req, res){
        const id = req.params.id;
        const deletedCar = await db.query(`DELETE FROM cars WHERE id=$1`, [id]);
        res.json(deletedCar.rows);
    }
}

module.exports = new carController();