export default function SaveGrade(req, res) {

 
    const sid = req.body.sid;
    const courseid = req.body.coursevalid;


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
        "UPDATE `students` SET enrolledin = '"+courseid+"' WHERE sid ='"+sid+"';",
        function(err, results, fields) {
            if (err){
                console.log(err);
                res.status(200).json("fail" + err.sqlMessage);
              }
            }
          );
       
 
     
     
     

}