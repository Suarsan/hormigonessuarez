import Card from './Card'
import ContactBanner from './ContactBanner'
import cards from './assets/cards'
function Home() {
  return (
    <main>
      <section className="home"></section>
      <ContactBanner />
      <section className="services">
      { cards.map(c => <Card key={c.id} content={c}/>) }
      </section>
    </main>
  )
}

export default Home
