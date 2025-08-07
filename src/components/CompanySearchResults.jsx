import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../features/favouritesSlice";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const dispatch = useDispatch();
  const favourites = useSelector(state => state.favourites.companies);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.company]);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddFavourite = () => {
    dispatch(addFavourite(params.company));
  };

  const isFavourite = favourites.includes(params.company);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="display-6">Job posting for: {params.company}</h1>
            <div>
              <Button
                onClick={handleAddFavourite}
                disabled={isFavourite}
                variant={isFavourite ? "success" : "primary"}
                title={isFavourite ? "Già nei preferiti" : "Aggiungi ai preferiti"}
              >
                {isFavourite ? "✓ Preferito" : "Aggiungi ai preferiti"}
              </Button>
            </div>
          </div>

          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;