export default function SaveGrade(req, res) {

 
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const address = req.body.address;
    const telephone = req.body.telephone;


    const mysql = require('mysql2');

      // create the connection to database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'example',
        port: 2222,
        database: 'wse'
    });


    connection.query(
        "INSERT INTO `students` (`name`,`surname`,`email`,`address`,`telephone`) VALUES ('"+name+"','"+surname+"','"+email+"','"+address+"','"+telephone+"');",
        function(err, results, fields) {
            if (err){
                console.log(err);
                res.status(200).json("fail" + err.sqlMessage);
              }
            }
          );
 
     
     
     

}