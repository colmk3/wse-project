export default function deleteCourse(req, res) {

 
    const coursed = req.body.coursed;
    


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
        "DELETE FROM `courses` WHERE coursed ='"+coursed+"';",
        function(err, results, fields) {
            if (err){
                console.log(err);
                res.status(200).json("fail" + err.sqlMessage);
              }
            }
          );
       
 
     
     
     

}