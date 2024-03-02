import Card from './Card'
import ContactBanner from './ContactBanner'

function Home() {

  return (
    <main>
      <section className="home"></section>
      <ContactBanner />
      <Card title="Hormigón y morteros"/>
      <Card title="Materiales de construcción"/>
    </main>
  )
}

export default Home
