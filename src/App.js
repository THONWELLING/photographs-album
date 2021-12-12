import React, { useState, useEffect } from 'react'
import * as C from './styles'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from './components/Loading';
import { client } from './components/Api'

function App() {

  const [photo, setPhoto] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  
  const nextPage = () => {
    setPageNumber(pageNumber + 1)
    setIsLoading(true)
  }

  const previousPage = () => {
    if (pageNumber !== 1) {
      setPageNumber(pageNumber - 1)
      setIsLoading(true)
    }
    if (pageNumber === 1) {
      toast.error('There Is No Page Number 0.Please Click The Forward Arrow To Go To The Next Valid Page!', {
        position: "top-center",
        autoClose: 4500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  }


  useEffect(() => {

    async function fetchPhotos() {
      client.photos.curated({ page: pageNumber, per_page: 15 }).then(photos => {
        setPhoto(photos.photos)
        setIsLoading(false)
      })
    }

    fetchPhotos()
  }, [pageNumber])



  return (
    <>
      <C.Header>
        <p>Thonwelling</p>

        <div>
          <a target='_blank' href="https://github.com/THONWELLING"><i class='bx bxl-github git'></i></a>
          <a target='_blank' href="https://www.linkedin.com/in/wellington-sousa-6494a6179/"><i class='bx bxl-linkedin'></i></a>
        </div>
      </C.Header>
      <C.Container>
        <C.H1> Photograph Album</C.H1>

        <C.ContainerImage>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {photo && photo.map((image) => (
                <C.List key={image.id}>
                  <C.Image src={image.src.medium} />
                  <C.Info target="_blank" href={image.photographer_url}>
                    {image.photographer}
                  </C.Info>
                </C.List>
              ))}
            </>

          )}
        </C.ContainerImage>
        <C.ContainerButton>
          <C.Button onClick={previousPage}>
            <i class='bx bx-chevron-left'></i>
          </C.Button>
          <div>
            <p className="number">{pageNumber !== 1 ? pageNumber - 1 : '0'}</p>
            <p>{pageNumber}</p>
            <p className="number">{pageNumber + 1}</p>
          </div>
          <C.Button onClick={nextPage}>
            <i class='bx bx-chevron-right'></i>
          </C.Button>
        </C.ContainerButton>
      </C.Container >
      <ToastContainer />
      <C.Footer>
        <a target="_blank" href="https://www.pexels.com">
          <img src="https://images.pexels.com/lib/api/pexels-white.png" />
        </a>

        <p>All Rights Reserved To Pexels</p>
        <p>Photos provided by Pexels's API</p>
      </C.Footer>
    </>
  );
}

export default App;
