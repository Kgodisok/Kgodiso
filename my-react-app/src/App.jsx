import './App.css'

const photos = [
  {
    image: '/gallery/djmixer.jpg',
    alt: 'DJ controller, laptop, headphones, and microphone set up for a mix',
    title: 'Behind the decks',
    description: 'My DJ setup, ready for a mix.',
    shape: 'photo-tall',
  },
  {
    image: '/gallery/IMG-20241211-WA0025.jpg',
    alt: 'Portrait of Kgodiso wearing a black beanie and white shirt',
    title: 'A moment of me',
    description: 'A sunny day and a quick photo.',
    shape: 'photo-tall',
  },
  {
    image: '/gallery/LC500.jpg',
    alt: 'White Lexus LC 500 coupe',
    title: 'The Lexus LC 500',
    description: 'My favourite car.',
    shape: 'photo-wide',
  },
  {
    image: '/gallery/LC500BACK.jpg',
    alt: 'Rear view of a Lexus LC 500 on a mountain road at sunset',
    title: 'A view from behind',
    description: 'The LC 500 on a mountain road.',
    shape: 'photo-tall',
  },
  {
    image: '/gallery/spiderman.jpg',
    alt: 'Spider-Man in his red and blue suit',
    title: 'Spider-Man',
    description: 'One of the heroes I grew up with.',
    shape: 'photo-wide',
  },
  {
    image: '/gallery/spidermanandmessi.jpg',
    alt: 'A collage featuring Spider-Man and Lionel Messi',
    title: 'Spider-Man & Messi',
    description: 'Two inspirations from growing up.',
    shape: 'photo-tall',
  },
  {
    image: '/gallery/Screenshot_20230510-060952_Lite.jpg',
    alt: 'Throwback portrait of Kgodiso',
    title: 'A throwback',
    description: 'An older photo of me.',
    shape: 'photo-tall',
  },
  {
    image: '/IMG-20241211-WA0027.jpg',
    alt: 'Portrait of Kgodiso outdoors wearing a black beanie and white shirt',
    title: 'Out in the sun',
    description: 'Another moment from my camera roll.',
    shape: 'photo-tall',
  },
]

function App() {
  return (
    <main className="gallery-page">
      <header className="gallery-header">
        <a className="gallery-brand" href="#top">My gallery<span>.</span></a>
        <span className="photo-count">{photos.length} PHOTOS</span>
      </header>

      <section className="photo-section" id="top" aria-label="Photo gallery">
        <div className="photo-grid">
          {photos.map((photo) => (
            <figure className={`photo-card ${photo.shape}`} key={photo.image}>
              <img src={photo.image} alt={photo.alt} loading="lazy" />
              <figcaption>
                <span className="photo-title">{photo.title}</span>
                <span className="photo-description">{photo.description}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
