package results

type SearchResult struct {
	ID                       int        `xml:"id"`
	BooksCount               int        `xml:"books_count"`
	RatingsCount             int        `xml:"ratings_count"`
	TextReviewsCount         int        `xml:"text_reviews_count"`
	OriginalPublicationYear  int        `xml:"original_publication_year"`
	OriginalPublicationMonth int        `xml:"original_publication_month"`
	OriginalPublicationDay   int        `xml:"original_publication_day"`
	AverageRating            float64    `xml:"average_rating"`
	BestBook                 ResultBook `xml:"best_book"`
}

type ResultBook struct {
	ID            int          `xml:"id"`
	Title         string       `xml:"title"`
	Author        ResultAuthor `xml:"author"`
	ImageURL      string       `xml:"image_url"`
	SmallImageURL string       `xml:"small_image_url"`
}

type ResultAuthor struct {
	ID   int    `xml:"id"`
	Name string `xml:"name"`
}
