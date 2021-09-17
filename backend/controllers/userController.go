package controllers

import (
	"fmt"
	"net/http"
)

func Hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "hello worlddd")
}


func AllUsers(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "All users endpoint")

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