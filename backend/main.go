package main

import (
	"github.com/gofiber/fiber"
	_ "github.com/lib/pq"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)



func main() {
    dsn := "host=localhost user=postgres password=981419 dbname=test port=5432 sslmode=disable TimeZone=Asia/Shanghai"
    _, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

    if err != nil{
        panic("couldnt connect to database")
    }
    
    app := fiber.New()
    app.Get("/", func(c *fiber.Ctx) error {
        return c.SendString("hello world")
    })

    app.Listen(":3000")


}