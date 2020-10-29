import React from "react";
import {
  Figure,
  Dropdown,
  DropdownButton,
  Container,
} from "react-bootstrap";

const CardMusic = () => {
  return (
    <React.Fragment>
      <Container sm={6}>
       
            <Figure>
              <Figure.Image src="/fonseec-card1.jpg" />
              <DropdownButton
                id="dropdown-basic"
                className='btao'
                variant="inline"
                title="Ouvir"
                size= "sm"
              >
                <Dropdown.Item href="https://open.spotify.com/artist/4Ycr4rT2v2QOPlNL5G8dIV?si=CA1i_psgQQiQgxR_eMj8ag" title='Spotify'>
                  {" "}
                  Spotify{" "}
                </Dropdown.Item>
                <Dropdown.Item href="https://www.youtube.com/channel/UCAZa5Z2e2-8Z6LqOTskr-Qw/featured" title='Youtube'>
                  {" "}
                  Youtube{" "}
                </Dropdown.Item>
                <Dropdown.Item href="https://www.deezer.com/en/artist/72189712" title='Deezer'>
                  {" "}
                  Deezer{" "}
                </Dropdown.Item>
              </DropdownButton>
            </Figure>
         
            <Figure>
              <Figure.Image src="/fonseec-card3.png" />
              <DropdownButton
                id="dropdown-basic"
                variant="inline"
                title="Ouvir"
              >
                <Dropdown.Item href="https://open.spotify.com/artist/4Ycr4rT2v2QOPlNL5G8dIV?si=CA1i_psgQQiQgxR_eMj8ag" title='Spotify'>
                  {" "}
                  Spotify{" "}
                </Dropdown.Item>
                <Dropdown.Item href="https://www.youtube.com/channel/UCAZa5Z2e2-8Z6LqOTskr-Qw/featured" title='Youtube'>
                  {" "}
                  Youtube{" "}
                </Dropdown.Item>
                <Dropdown.Item href="https://www.deezer.com/en/artist/72189712" title='Deezer'>
                  {" "}
                  Deezer{" "}
                </Dropdown.Item>
              </DropdownButton>
            </Figure>
          
            <Figure>
              <Figure.Image src="/fonseec-card3.png" />
              <DropdownButton
                id="dropdown-basic"
                variant="inline"
                title="Ouvir"
              >
                <Dropdown.Item href="https://open.spotify.com/artist/4Ycr4rT2v2QOPlNL5G8dIV?si=CA1i_psgQQiQgxR_eMj8ag" title='Spotify'>
                  {" "}
                  Spotify{" "}
                </Dropdown.Item>
                <Dropdown.Item href="https://www.youtube.com/channel/UCAZa5Z2e2-8Z6LqOTskr-Qw/featured" title='Youtube'>
                  {" "}
                  Youtube{" "}
                </Dropdown.Item>
                <Dropdown.Item href="https://www.deezer.com/en/artist/72189712" title='Deezer'>
                  {" "}
                  Deezer{" "}
                </Dropdown.Item>
              </DropdownButton>
            </Figure>
          
          <div className="albuma">
            <Figure>
              <Figure.Image src="/img-fonseec1.png" />
            </Figure>
          </div>
        
      </Container>
    </React.Fragment>
  );
};

export default CardMusic;
