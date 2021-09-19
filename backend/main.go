package main

import (
	"./database"
	"./routes"
	"github.com/gofiber/fiber"
	"github.com/gofiber/fiber/middleware/cors"
)



func main() {
   
    database.Connect()
    app := fiber.New()
    
    routes.Setup(app)
    
    app.Use(cors.New(cors.Config{
        AllowOrigins: "*",
        AllowHeaders:  "Accept, Content-Type, Content-Length, Accept-Encoding, Authorization,X-CSRF-Token",
        AllowMethods:  "POST, GET, OPTIONS, PUT, DELETE",

       /* if origin := r.Header.Get("Origin"); origin != "" {
        w.Header().Set("Access-Control-Allow-Origin", "*")
        w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
        w.Header().Set("Access-Control-Allow-Headers", allowedHeaders)
        w.Header().Set("Access-Control-Expose-Headers", "Authorization")
    }
    */
    }))
    app.Listen(":8000")

}