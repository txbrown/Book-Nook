package scalars

import (
	"errors"
	"io"
	"strconv"

	"github.com/99designs/gqlgen/graphql"
)

type Float32 float32

// UnmarshalGQL implements the graphql.Unmarshaler interface
func MarshalFloat32(num float32) graphql.Marshaler {
	return graphql.WriterFunc(func(w io.Writer) {

		r := float64(num)

		w.Write([]byte(strconv.FormatFloat(r, 'f', 6, 64)))

	})
}

// MarshalGQL implements the graphql.Marshaler interface
func UnmarshalFloat32(v interface{}) (float32, error) {
	r, ok := v.(float32)

	if !ok {
		return 0, errors.New("Invalid float!")
	}

	return r, nil
}
