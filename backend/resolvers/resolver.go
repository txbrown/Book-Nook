package resolvers

//go:generate go run github.com/99designs/gqlgen

import (
	"booknook-backend/generated"
	"booknook-backend/goodreads"
	"booknook-backend/goodreads/responses"
	"booknook-backend/goodreads/responses/results"
	"booknook-backend/models"
	"context"
	"errors"
	"log"
	"os"

	"github.com/joho/godotenv"
) // THIS CODE IS A STARTING POINT ONLY. IT WILL NOT BE UPDATED WITH SCHEMA CHANGES.

type Resolver struct {
	goodreadsClient *goodreads.Client
}

func (r *Resolver) Query() generated.QueryResolver {
	return &queryResolver{r}
}

type queryResolver struct{ *Resolver }

func (r *queryResolver) Author(ctx context.Context, id string) (*responses.Author, error) {
	a, err := r.goodreadsClient.AuthorShow(id)

	if err != nil {
		return nil, err
	}
	return a, nil
}

func (r *queryResolver) User(ctx context.Context, id string) (*responses.User, error) {
	log.Println(id)
	a, err := r.goodreadsClient.UserShow(id)

	if err != nil {
		return nil, err
	}

	return a, nil
}

func (r *queryResolver) SearchBooks(ctx context.Context, query string, page int, field models.SearchField) ([]*results.SearchResult, error) {

	results, err := r.goodreadsClient.SearchBooks(query, page, goodreads.SearchField(field))

	if err != nil {
		return nil, errors.New("No results found")
	}
	log.Println(results)
	return results, nil
}

func NewResolvers() *Resolver {
	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	key := os.Getenv("API_KEY")
	c := goodreads.NewClient(key)
	r := &Resolver{
		goodreadsClient: c,
	}

	return r
}
