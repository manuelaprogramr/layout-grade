import logo from './logo.svg';
import './App.css';
import './responsive/mobile.css'

function App() {
  return (
    <div id="container-principal">
      <div className='caixa-principal'>
          <div className='caixa'>

            <div className='caixa-info'>
  
            <h1>join our community</h1>
      
          <h2>30-day, hassle-free money back guarantee</h2>
          <p className='font-cinza'>
            Gain access to our full library of tutorials along with expert code reviews.
            Perfect for any developers who are serious about honing their skills.
          </p>
            </div>
          
          </div>

          <div className='caixa1'>

            <div className='caixa-info'>
              <h3>
              Monthly Subscription
          </h3>

          <div className='pacote'><h3>29$</h3><span className='p-opacity'>por month</span></div>

          <p>
            Full access for less than $1 a day
          </p>
            <button className='botao'>sign Up</button>
            </div>
          
         
    </div>
    <div className='caixa2'>

      <div className='caixa-info'>
         <h3>
            Why Us
          </h3>

          <p>
            Tutorials by industry experts
            Peer & expert code reviews
            Coding exercises
            Access to our GitHub repos
            Community forum
            Flashcard decks
            Ner videos every week
          </p>

      </div>
         

  </div>
      </div>

</div>

  );
}

export default App;
