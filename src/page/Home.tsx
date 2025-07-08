import { InformationPage } from '../templates/InformationPage'
import SampleImage from '../assets/homepage.webp';

function Home() {
  return (
      <InformationPage 
       image={SampleImage}
        title="React Template Card"
        description="This is a beautiful card template showing image, title, description and rating stars."
        rating={4}
        />
  )
}

export default Home
