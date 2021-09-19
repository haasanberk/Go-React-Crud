package controllers

import (
	"../database"
	"../models"
	"github.com/gofiber/fiber"
)

func GetAll(c *fiber.Ctx) error {

	var users []models.User
	database.DB.Find(&users)
	return c.Status(fiber.StatusOK).JSON(users)
	
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
	return c.Status(fiber.StatusOK).JSON(user)
}


func GetUserByID(c *fiber.Ctx) error {
	id := c.Params("id")
	var user models.User

	database.DB.First(&user, id)

	if user.Name == ""{
		return c.JSON("No User Found with ID")
		
	}
	return c.Status(fiber.StatusOK).JSON(user)
}

func DeleteUser(c *fiber.Ctx) error{
	id := c.Params("id")
	
	var user models.User
	database.DB.First(&user, id)
	
	if user.Name == "" {
		return c.JSON("No User Found with ID")
	}

	database.DB.Delete(&user)
	return c.Status(fiber.StatusOK).JSON(user)
}


func UpdateUser(c *fiber.Ctx) error{
	id := c.Params("id")
	user := new(models.User)
	database.DB.First(&user, id)

	if user.Name == "" {
		return c.JSON("No User Found with ID")
	}
	if err := c.BodyParser(&user); err != nil {
		return c.Status(500).SendString(err.Error())
	}

	database.DB.Save(&user)
	return c.JSON(user)
}