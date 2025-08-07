import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavourite, clearFavourites } from "../features/favouritesSlice";
import { Container, Button, ListGroup } from "react-bootstrap";

const Favourites = () => {
  const companies = useSelector(state => state.favourites.companies);
  const dispatch = useDispatch();

  return (
    <Container>
      <h1 className="my-3">Preferiti</h1>

      {companies.length === 0 ? (
        <p>Nessuna azienda nei preferiti.</p>
      ) : (
        <>
          <ListGroup>
            {companies.map((c) => (
              <ListGroup.Item key={c} className="d-flex justify-content-between align-items-center">
                <Link to={`/${encodeURIComponent(c)}`}>{c}</Link>
                <div>
                  <Button size="sm" variant="outline-danger" onClick={() => dispatch(removeFavourite(c))}>
                    Rimuovi
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="mt-3">
            <Button variant="secondary" onClick={() => dispatch(clearFavourites())}>Rimuovi tutti</Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Favourites;