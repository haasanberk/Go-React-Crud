package database

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq"
	_ "gorm.io/driver/postgres"
)

var db *gorm.DB
var err error

type User struct{
	gorm.Model
	Name string
	Email string
}

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "981419"
	dbname   = "test"
  )

func Connect(){
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
    "password=%s dbname=%s sslmode=disable",
    host, port, user, password, dbname)

    db, err := gorm.Open("postgres", psqlInfo)

    if err != nil{
		fmt.Println(err.Error())
        panic("couldnt connect to database")
    }

	defer db.Close()
	db.AutoMigrate(&User{})

	fmt.Println("connected")
}