import Link from 'next/link'
import Image from 'next/image'

function About() {
  return (
    <div className="about" id="about">
      <div className="title">
        <h2> About me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
          <p className="about-grid-info-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
          <Link href="coso.com" className="link" target="_blank">
            {' '}
            coso
          </Link>
          <p className="about-grid-info-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
          <p className="about-grid-info-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">ElasticSearch</li>
            <li className="about-grid-info-list-item">Kibana</li>
            <li className="about-grid-info-list-item">Css</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/gato1.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
