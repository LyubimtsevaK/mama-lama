import './App.css';
import Logo from './picture/logo.png'
import Lama from './picture/lama.png'

function App() {
  return (
    <div>
      <div className='header'>
        <div className='menu'>
          <button className='buttMenu'>О компании</button>
          <button className='buttMenu'>Услуги</button>
          <button className='buttMenu'>Пакетные предложения</button>
          <button className='buttMenu'>Отзывы</button>
          <button className='buttMenu'>Контакты</button>
        </div>
        <img src={Logo} alt='' className='logo'/>
        <div>
          <h1 className='h1'>Агентсво детских праздников</h1>
          <img src={Lama} alt='' className='logoLama'/>
        </div>
        <div>
          <h2 className='h2'>Мечтаете об идеальном празднике?</h2>
          <p className='p'>Вы хотите сделать праздник для ребенка волшебным и особенным?<br /> Мы знаем, что вам нужно, ведь мы профессионалы своего дела.  <br />Мы уже ждем вашего звонка!</p>
        </div>
      </div>
    </div>
  );
}

export default App;