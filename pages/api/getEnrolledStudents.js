export default function getEnrolledStudents(req, res) {

    console.log("get enrolled page ID for query" + req.query.id);
  
    let currentID = req.query.id;
  
     
    // get the client
    const mysql = require('mysql2');
  
    // create the connection to database
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'example',
      port: 2222,
      database: 'wse'
    });
  
  
    // simple query
  connection.query(
    "SELECT * FROM students WHERE enrolledin = '"+currentID+"';",
    function(err, results, fields) {
        //loop over all records
        //return back records
        console.log(results); // results contains rows returned by server
        res.status(200).json(results);
        if (err){
            console.log(err);
            res.status(200).json("fail" + err.sqlMessage);
          }

        console.log("sending back results")
        console.log(results);
        

}
  );
  
  
  
  
  
  
  
      
      
  }