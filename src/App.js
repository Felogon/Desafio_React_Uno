import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Card from './Components/Card';



function App() {
  return (
    
    <div> 
      <Header/>
      <Card id="card-1" titulo ="Brittish Shorthair" subtitulo="Gato nativo de Reino Unido" link = "https://www.collinsdictionary.com/images/full/britishshorthair_123922408.jpg"/>
      <Card id="card-2" titulo ="Ragdoll" subtitulo="Gato nativo de Inglaterra" link = "https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2021-02/CAT%20BREED%20Hero%20Mobile_0013_Ragdoll.jpg?itok=LaJ17-Js"/>
      <Card id="card-3" titulo ="Gato Siamés" subtitulo="Gato nativo de Tailandia" link = "https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/cat/adult/5cd047a1a4a90229922507.jpg"/>
      <Footer/>
    </div> 
   
  );
}

export default App;
