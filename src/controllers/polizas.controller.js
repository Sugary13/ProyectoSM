import { pool } from "../db.js";

export const getPolizas = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM polizas");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({message: 'Algo fue mal..'});
    }
}


export const getPoliza = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM polizas WHERE Id = ?", [req.params.Id]);
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({message: 'Algo fue mal..'});
    }
}