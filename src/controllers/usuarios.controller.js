import { pool } from "../db.js";

export const getUsuarios = async (req, res) => {
    
    try {
        const [rows] = await pool.query("SELECT * FROM registrar");
        res.send(rows);
    } catch (error) {
        return res.status(500).json({message: 'Algo fue mal..'});
    }
}

export const getUsuario = async(req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM registrar WHERE Usuario = ?", [req.params.Usuario]);
    console.log(rows);

    if (rows.length <= 0) {
        return res.status(404).json({
            message: "Usuario no encontrado"});
    }
    res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({message: 'Algo fue mal..'});
    }
}

export const createUsuarios = async (req, res) => {
    try {
        const {Nombre, Usuario, Contraseña} = req.body;
        const [rows] = await pool.query("INSERT INTO registrar (Nombre, Usuario, Contraseña) VALUES (?, ?, ?)", [Nombre, Usuario, Contraseña]);
        console.log(rows);
        res.send("Usuario creado");
    } catch (error) {
        return res.status(500).json({message: 'Algo fue mal..'});
    }
}

export const updateUsuarios = async (req, res) => {
    try {
        const {Id} = req.params;
    const {Nombre, Usuario, Contraseña} = req.body;
    const [result] = await pool.query("UPDATE registrar SET Nombre = IFNULL(?, Nombre), Usuario = IFNULL(?, Usuario), Contraseña = IFNULL(?, Contraseña) WHERE Id = ?", [Nombre, Usuario, Contraseña, Id]);
    console.log(result);

    if (result.affectedRows === 0) {
        return res.status(404).json({   
            message: "Usuario no encontrado"});
    }

    const [rows] = await pool.query("SELECT * FROM registrar WHERE Id = ?", [Id]);

    res.json(rows[0]);
    } catch (error) {
       return res.status(500).json({message: 'Algo fue mal..'});
    }
}

export const deleteUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM registrar WHERE Usuario = ?", [req.params.Usuario]);
        if (result.affectedRows === 0) {
            return res.status(404).json({   
                message: "Usuario no encontrado"});
        }
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: 'Algo fue mal..'});
    }

    
    
}