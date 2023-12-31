import * as garage from '../../api/garage';
import * as winners from '../../api/winners';
import Listeners from '../controller/listeners';
import Garage from '../view/garage';
import Winners from '../view/winners';

await garage.getCars();
await winners.getWinners();
await garage.getWinnersCarsList();

class App {
  private garage: Garage;

  private winners: Winners;

  private listeners: Listeners;

  constructor() {
    this.garage = new Garage();
    this.winners = new Winners();
    this.listeners = new Listeners();
  }

  public start(): void {
    this.garage.drawGarageView();
    this.winners.drawWinnersView();
    this.listeners.addListeners();
  }
}

export default App;
