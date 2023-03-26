export default function deleteCourse(req, res) {

 
    const sid = req.body.sid;
    


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
        "DELETE FROM `grades` WHERE sid ='"+sid+"';",
        function(err, results, fields) {
            if (err){
                console.log(err);
                res.status(200).json("fail" + err.sqlMessage);
              }
            }
          );
       
 
     
     
     

}