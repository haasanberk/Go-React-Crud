package controllers

import (
	"fmt"
	"net/http"

	"../database"
	"../models"
	"github.com/gofiber/fiber"
)

func Hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "hello worlddd")
}


func CreateUser(c *fiber.Ctx) error{
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	
	user := models.User{
		Name: data["Name"],
		Email: data["Email"],
	}

	database.DB.Create(&user)
	
	return c.JSON(user)


}


func NewUser(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "new user endpoint")

}
func DeleteUser(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "Delete user endpoint")

}
func UpdateUser(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "UpdateUser Endpoint")

}