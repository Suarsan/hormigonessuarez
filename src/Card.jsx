function Card({content}) {

  return (
    <article className="card">
      <div style={{ backgroundImage: `url(${content.image})` }}></div>
      <div>
        <h3 title={content.title}>{content.title}</h3>
        <p title={content.paragraph}>{content.paragraph}</p>
      </div>
    </article>
  )

}

export default Card
