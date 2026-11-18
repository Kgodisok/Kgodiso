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
    image: '/gallery/djimage.jpg',
    alt: 'Gabbana Sounds deep house mixtape artwork with Kgodiso at the DJ decks',
    title: 'Gabbana Sounds',
    description: 'Deep house mixtape.',
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
    image: '/gallery/Best Picture.jpeg',
    alt: 'Portrait of Kgodiso wearing a blue shirt and white shorts',
    title: 'A portrait in blue',
    description: 'A photo of me.',
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

      <section className="gallery-intro" id="top">
        <p className="intro-kicker">A PERSONAL PHOTO COLLECTION</p>
        <h1>Things I love,<br /><span>in pictures.</span></h1>
        <p className="intro-copy">From the DJ decks and my dream car to the heroes I grew up with, these photos capture a few of my favorite things.</p>
      </section>

      <section className="photo-section" aria-labelledby="gallery-title">
        <div className="gallery-heading">
          <div><h2 id="gallery-title">The gallery</h2><p>Music, memories, and the things that inspire me.</p></div>
        </div>
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
