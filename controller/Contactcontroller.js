let contact = {};

const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
  });

contact.getAll = (req, res) => {
    con.query("SELECT * FROM `contact`", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.json(result)
    });
}

contact.getID = (req,res)=>{
    con.query("SELECT * FROM `contact` WHERE id="+req.params.id, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.json(result)
    });
}

contact.addData = (req,res)=>{
    let sql = "INSERT INTO contact (name, telephone, address) VALUES (?, ?, ?)";
    con.query(sql,[req.body.name,req.body.telephone ,req.body.address], function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.json(result)
    });
}

contact.updateData = (req,res)=>{
    let sql = "UPDATE contact SET name = ?,telephone=?,address=? WHERE id = ?";
    con.query(sql,[req.body.name,req.body.telephone ,req.body.address,req.params.id], function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.json(result)
    });
}

contact.deleteData = (req,res)=>{
    con.query("DELETE FROM contact WHERE id ="+req.params.id, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.json(result)
    });
}

module.exports = contact;