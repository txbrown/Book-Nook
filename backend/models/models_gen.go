// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package models

import (
	"fmt"
	"io"
	"strconv"
)

type SearchField string

const (
	SearchFieldAuthor SearchField = "author"
	SearchFieldTitle  SearchField = "title"
	SearchFieldAll    SearchField = "all"
)

var AllSearchField = []SearchField{
	SearchFieldAuthor,
	SearchFieldTitle,
	SearchFieldAll,
}

func (e SearchField) IsValid() bool {
	switch e {
	case SearchFieldAuthor, SearchFieldTitle, SearchFieldAll:
		return true
	}
	return false
}

func (e SearchField) String() string {
	return string(e)
}

func (e *SearchField) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = SearchField(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid SearchField", str)
	}
	return nil
}

func (e SearchField) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
