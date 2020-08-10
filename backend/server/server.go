package main

import (
	"booknook-backend/generated"
	"booknook-backend/resolvers"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/handler"
	"github.com/go-chi/chi"
	"github.com/gorilla/websocket"
	"github.com/rs/cors"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	router := chi.NewRouter()

	// Add CORS middleware around every request
	// See https://github.com/rs/cors for full option listing
	router.Use(cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		Debug:          true,
	}).Handler)

	upgrader := websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool {
			// Check against your desired domains here
			return r.Host == "*"
		},
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
	}

	res := resolvers.NewResolvers()
	router.Handle("/", handler.Playground("GraphQL playground", "/query"))
	router.Handle("/query", handler.GraphQL(generated.NewExecutableSchema(generated.Config{Resolvers: res}), handler.WebsocketUpgrader(upgrader)))
	srv := &http.Server{Addr: ":8080", Handler: router}

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	if err := srv.ListenAndServe(); err != http.ErrServerClosed {
		// unexpected error. port in use?
		log.Fatalf("ListenAndServe(): %v", err)
	}
}
