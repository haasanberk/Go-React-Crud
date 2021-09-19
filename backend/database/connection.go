package database

import (
	"fmt"

	"../models"
	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq"
	_ "gorm.io/driver/postgres"
)



const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "981419"
	dbname   = "test"
  )

  var DB *gorm.DB

func Connect(){
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "password=%s dbname=%s sslmode=disable",
    host, port, user, password, dbname)

    connection, err := gorm.Open("postgres", psqlInfo)

    if err != nil{
		fmt.Println(err.Error())
        panic("couldnt connect to database")
    }

	DB = connection
	connection.AutoMigrate(&models.User{})

}