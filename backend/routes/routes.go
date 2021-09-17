package routes

import (
	"log"
	"net/http"

	"../controllers"
	"github.com/gorilla/mux"
)

func HandleRequests(){
	myRouter := mux.NewRouter().StrictSlash(true)
	myRouter.HandleFunc("/", controllers.Hello).Methods("GET")
	myRouter.HandleFunc("/users", controllers.AllUsers).Methods("GET")

	myRouter.HandleFunc("/user/{name}/{email}", controllers.NewUser).Methods("POST")
	myRouter.HandleFunc("/user/{name}", controllers.DeleteUser).Methods("DELETE")
	myRouter.HandleFunc("/user/{name}/{email}", controllers.Hello).Methods("PUT")

	log.Fatal(http.ListenAndServe(":3000", myRouter))
}