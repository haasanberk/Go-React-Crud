package routes

import (
	"../controllers"
	"github.com/gofiber/fiber"
)

func Setup(app *fiber.App){
	
	app.Post("api/create", controllers.CreateUser)
	app.Get("api/getAll", controllers.GetAll)
	app.Get("api/:id", controllers.GetUserByID)
	app.Delete("api/:id", controllers.DeleteUser)
	app.Put("api/update/:id", controllers.UpdateUser)


}