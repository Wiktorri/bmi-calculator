import React, {useState} from "react";
import './index.css'



function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let calcBmi = (event) => {
    event.preventDefault()

    if (weight === ''|| height === '') {
      alert('Proszę podaj Wagę i Wysokość')
    } else {
      let bmi = (weight / (height / 100 * height / 100))
      setBmi(bmi.toFixed(2))

      if (bmi >= 0 && bmi < 16) {
        setMessage('Jesteś wygłodzony')
      }else if (bmi >= 16 && bmi < 16.99) {
        setMessage('Jestes wychudzony')
      } else if (bmi >= 17 && bmi < 18.49) {
        setMessage('Posiadasz niedowagę')
      } else if (bmi >= 18.5 && bmi < 24.99) {
        setMessage('Posiadasz odpowiedznia wagę')
      } else if (bmi >= 25 && bmi < 29.99) {
        setMessage('Posiadasz nadwagę')
      } else if (bmi >= 30 && bmi < 34.99) {
        setMessage('Posiadasz otyłość I stopnia')
      } else if (bmi >= 35 && bmi < 39.99) {
        setMessage('Posiadasz otyłość II stopnia')
      } else {
        setMessage('Jesteś skrajnie otyły')
      }

    }
  }

  let reload = (event) => {
   setWeight('');
   setHeight('');
   setBmi('');
   setMessage('')
   event.preventDefault()
  }

  return (
      <div className="app">
        <div className='header'>
          <h1>
            Zdrowa strona
          </h1>
        </div>
        <div className='container'>
          <h2 className='center'>BMI Kalkulator</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label>Waga (Kg)</label>
              <input value={weight} onChange={(e) => setWeight(e.target.value)} type="number" min={1} max={500} maxLength={3}/>
            </div>
            <div>
              <label>Wysokość (Cm)</label>
              <input value={height} onChange={(event) => setHeight(event.target.value)} type="number" min={1} max={240} maxLength={3}/>
            </div>
            <div className='buttons'>
              <button className='btn' type='submit'>Wyślij</button>
              <button className='btn btn-outline' onClick={reload}>Zresetuj</button>
            </div>
          </form>
          <div className='center'>
            <h3>Twoje BMI wynosi: {bmi}</h3>
            <p>{message}</p>
          </div>
        </div >
        <div className='bmi-info' >
          <h2>
            Czym jest wskaźnik masy ciała, czyli Body Mass Index (BMI)
          </h2>
          <p>
            BMI - co to takiego? Wskaźnik BMI, czyli Body Mass Index to nic innego, jak wskaźnik masy ciała określający prawidłowość posiadanej masy ciała. Nazywany jest on także wskaźnikiem Queteleta. Dzięki niemu można dowiedzieć się o niedowadze, nadwadze, czy otyłości, a każdy z tych stanów świadczy o niedoborze, lub nadmiarze masy ciała. Opisuje on w pośredni sposób ilość tkanki tłuszczowej w ciele człowieka w oparciu, o stosunek masy ciała wyrażonej w kilogramach do wzrostu określanego w metrach. Geneza tego wskaźnika jest dość ciekawa, ponieważ stworzono go po to, by określać stopień ryzyka wystąpienia chorób i zgonów wśród społeczeństwa. Z początkowych obserwacji wynikało, iż osoby, które znajdują się w grupie niedowagi, albo nadwagi i otyłości, były bardziej narażone na przedwczesny zgon, niż osoby, które wskaźnik BMI mają na prawidłowym poziomie. BMI to nic innego jak wskaźnik, który określa, jaka jest prawidłowa waga do wzrostu i wieku. Odpowiedni poziom BMI to jednak nie wszystko. Warto dbać przede wszystkim o odpowiednią dietę i właściwą suplementację, co pozwoli na utrzymanie wskaźnika na właściwym poziomie.
          </p>
          <h2>
            Jak prawidłowo obliczyć wskaźnik masy ciała BMI
          </h2>
          <p>
            Na pewno wiele osób zadaje sobie to pytanie: BMI - jak obliczyć? Warto wspomnieć przede wszystkim, jak można obliczać omawiany wskaźnik BMI, co na pewno będzie przydatne. Jak obliczyć BMI - wzór, który się przyda, zostanie przedstawiony w tym artykule. Wystarczy wstawić w niego swoje dane, by uzyskać wskaźnik. Oblicz BMI i dowiedz się, na jakim jest poziomie. Obliczenie BMI jest bardzo proste, a wystarczy do wzoru podstawić tylko dwie informacje - swoją wagę, oraz wzrost wyrażony w metrach. Wzór na BMI wygląda następująco: należy podzielić swoją wagę przez wzrost wyrażony w metrach i podniesiony do kwadratu. Oczywiście w sieci dostępne są kalkulatory wagi, które umożliwiają obliczenie wskaźnika za pomocą kilku kliknięć. Najczęściej wprowadza się tam wspomniane wcześniej dane. Kalkulator BMI, a wiek osoby, która wskaźnik ten oblicza, czasami również jest brany pod uwagę przy obliczeniach. Z wiekiem bowiem wiąże się blisko kwestia metabolizmu organizmu. Dlatego BMI kalkulator, wiek często uwzględnia jako jeden z czynników przy obliczaniu.
          </p>
          <h2>
            Wskaźnik BMI a normy z nim związane
          </h2>
          <p>
            Posiadając już obliczony wskaźnik BMI, warto wiedzieć przede wszystkim, jakie są normy z nim związane i jak ten wynik interpretować.<br/>
            Normy BMI prezentują się następująco:<br/>
            poniżej 18,5 mamy do czynienia z niedowagą,<br/>
            pomiędzy 18,5 a 24,99 prawidłowe BMI - waga jest w normie,<br/>
            powyżej 24,99 występuje nadwaga.<br/>
            Niektóre źródła podają również klasyfikację rozszerzoną, która pozwala na określenie bardziej precyzyjnych danych. Poniżej wskaźnika 16 występuje wygłodzenie, od 16 do 16,99 jest do wychudzenie, a od 17 do 18,49 występuje niedowaga właściwa. Pomiędzy 18,5 a 24,99 mamy do czynienia z prawidłową wagą. Wskaźnik znajdujący się między 25, a 29,99 to nadwaga, a 30 do 34,99 oznacza otyłość I stopnia. Otyłość II stopnia, określana jako kliniczna występuje pomiędzy 35, a 39,99. Powyżej 40 to zaawansowana otyłość III stopnia.
          </p>
          <h2>
            Wskaźnik dobrego stanu zdrowia inne wskaźniki dietetyczne
          </h2>
          <p>
            Wskaźnik BMI określić można jako wskaźnik dobrego zdrowia. Jak wspomniano, powstał on po to, by móc określać, w jakiej kondycji zdrowotnej jest społeczeństwo. Każdy stan wybiegający poza normę BMI, czyli prawidłową masę ciała, może oznaczać, że w organizmie zachodzą zmiany niekoniecznie pożądane. Taki wynik zawsze warto skonsultować również ze swoim lekarzem, a on zleci bardziej szczegółowe badania. Oprócz wskaźnika BMI wskazać można także inne wskaźniki dietetyczne, takie jak: WHR - pomiar obwodu pasa i bioder, AMR, MBR, oraz TER.
            Jak widać, wskaźnik BMI stanowić może wskaźnik dobrego zdrowia. Warto kontrolować go regularnie i dbać o utrzymywanie odpowiedniej diety i zdrowego stylu życia.
          </p>
        </div>
        <div className='footer' >
          <p>
            <img src={require("./assets/icons8-question-mark-30.png")} alt=''/>
            W przypadku pytań proszę konatkować sie na podany numer telefonu, adres e-mail.
          </p>
          <p>
            <img src={require("./assets/icons8-phone-50.png")} alt=''/>
            tel. +48 601 183 200
          </p>
          <p>
            <img src={require("./assets/icons8-location-30.png")} alt=''/>
            ul. Wierzbowa 10
          </p>
          <p>
            <img src={require("./assets/icons8-phone-50.png")} alt=''/>
            E-mail: loki1924@o2.pl
          </p>
        </div>
        <div className='copyRight'>
          Copyright Zdrowa strona
        </div>

      </div>
  );
}

export default App;
