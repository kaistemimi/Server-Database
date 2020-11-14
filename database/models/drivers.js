const getDrivers = function() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM drivers"
      connection.query(sql, (err,data)=>{
        if(err)
        reject(err);
        else
        resolve(data)
      })
    })
  };

  const getOneDriver= function(id){
    return new Promise((resolve, reject) =>{
      const sql ="SELECT * FROM  drivers WHERE iddriver = ?"
      connection.query(sql, (err, data) =>{
        if(err)
        reject(err);
        else resolve(data)
      })
    })
  };

  const addDriver = function(driver){
    return new Promise((resolve, reject) =>{
      const sql = "INSERT INTO drivers (firstName,lastName,address,phoneNumber,email,password,ICN, driverLicense) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?)"
      connection.query(sql,[driver.firstName,driver.lastName,driver.address,driver.phoneNumber,driver.email,driver.password, driver.ICN,driver.driverLicense],(err,data) =>{
        if(err)
        reject(err)
        else
         resolve (data)
      })
    })
  }


  module.exports = {
    getDrivers,
   getOneDriver,
   addDriver
}