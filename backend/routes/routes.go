package routes

import (
	"../controllers"
	"github.com/gofiber/fiber"
)

func Setup(app *fiber.App){
	
	app.Post("create", controllers.CreateUser)
	app.Get("getAll", controllers.GetAll)
	app.Get("get/:id", controllers.GetUserByID)
	app.Delete(":id", controllers.DeleteUser)
	app.Put("update/:id", controllers.UpdateUser)


}