const getOneCar= function(id){
    return new Promise((resolve, reject) =>{
      const sql ="SELECT * FROM  cars WHERE idcars = ?"
      connection.query(sql, (err, data) =>{
        if(err)
        reject(err);
        else resolve(data)
      })
    })
  };

module.exports = {
    getOneCar
}