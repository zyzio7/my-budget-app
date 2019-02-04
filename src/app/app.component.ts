import {Component, OnInit} from '@angular/core';
import {Bill, BillEntry} from './bill';
import {Category} from "./category.enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-budget';
  bills: Bill[] = [];

  ngOnInit(): void {
    this.bills = this.generateSampleBills();
  }

  generateSampleBills(): Bill[] {
    const numberOfDays = 10;
    const maxBillsPerDay = 3;

    let bills: Bill[] = [];

    for (let i = 0; i < numberOfDays; i++) {
      let entries: BillEntry[] = [];
      for (let j = -1; j < Math.floor(Math.random() * maxBillsPerDay); j++) {
        let entry: BillEntry = {
          name: this.getRandomProductName(),
          value: Math.floor(Math.random() * 100),
          category: this.getRandomCategory()
        };
        entries.push(entry);
      }

      bills.push({
        date: new Date(),
        entries: entries
      });
    }

    return bills;
  }

  getRandomCategory(): Category {
    let len = (Object.keys(Category).length / 2) - 1;
    let item = Math.floor(Math.random() * len);
    let categoryString = Object.keys(Category)[item];
    return (<any>Category)[categoryString];
  }

  getRandomProductName(): string {
    let length = this.productNames.length;
    let index = Math.floor(Math.random() * length);
    return this.productNames[index];
  }

  productNames = [
    'Almond Flour Ext Fine Nutley Farms	1/25 lb',
    'Almond Milk Creamer Vanilla	12/16 Oz',
    'Almond Milk Multipack Vanilla	6/4-4oz',
    'Almond Milk Protein Unsweetened	6/64oz',
    'Almond Milk Reduced Sugar 6/64 Oz	6/64 Ounce',
    'Almond Milk Unsweetened 6/64oz	6/64oz',
    'Almond Milk Unsweetened 8/64 Oz	8/64 Ounce',
    'Almondmilk Barista Blend Dairy Free	6/32 Ounce',
    'Anchovy Fillets 12/7oz #9010127	12/7 Ounce',
    'Anchovy Fillets Marinated #901024	2/4.4 LB',
    'Arancini Balls	100 ct',
    'Artichoke Hearts Stuffed	100 ct',
    'Artichokes Grilled #902024	2/4.4 LB',
    'Asiago Cheese + Asparagus	100 ct',
    'Baking Chips Dark Grain 12/10oz	12/10 Ounce',
    'Baking Powder 5#	5 Lb',
    'Baking Powder Aluminum Free 5#	5 LB',
    'Balsamic Vinegar 6/16.9 Oz	6/16.9 Ounce',
    'Bars Apple Cinnamon & Pecan	12-1.4 oz',
    'Bars Blueberry Vanilla & Cashew	12/1.4',
    'Base Au Jus	12/1 lb',
    'Base Beef Roasted	1/20 lb',
    'Base Beef Roasted	1/40 lb',
    'Base Beef Type MC	1/40 lb',
    'Base Chicken Euro Roast	12/1 lb',
    'Base Chicken Roast Euro	1/40 lb',
    'Base Chicken Tpe MC	1/40 lb',
    'Base Clam	6/1 lb',
    'Base Clam No MSG	2/10 lb',
    'Base Clam Type MS	6/1 lb',
    'Base Garlic Roasted	12/1 lb',
    'Base Ham Smoke House	12/1 lb',
    'Base Ham Type MC	12/1 lb',
    'Base Ham Type MC	2/10 lb',
    'Base Lobster	6/1 lb',
    'Base Mirepoix	12/1 lb',
    'Base Mirepoix	2/10 lb',
    'Base Mushroom No MSG	12/1 lb',
    'Base Onion Caramelized	12/1 lb',
    'Base Onion Roasted	12/1 lb',
    'Base Pork No MSG	6/1 lb',
    'Base Sauce Glace De Viande	2/10 lb',
    'Base Turkey No MSG	6/1 lb',
    'Base Turkey Type MC	2/10 lb',
    'Beef Empanadas	100 ct',
    'Beef Hibachi	1/100 ct',
    'Beef Kabob	1/50 ct',
    'Beef Satay Teriyaki	1/100 ct',
    'Beef Wellington	1/50 ct',
    'Beef Wellington 1.25 oz	50 ct',
    'Beef/Veal Demi Glace	6/5 lb',
    'Bev Art Spearmint & Lime (Mojito)	6/32 oz',
    'Bev Art Yuzu Luxe Sour	6/32 oz',
    'Blintz Sweet Cheese 1.75 oz	90 ct',
    'Bratwurst Links Guinness Beer 5-1	1/10 lb',
    'Butter Beumont 83% Bue100 3	36/1 lb',
    'Butter Beurremont 83% Log Bue450	12/ 1 lb',
    'Butter Solid Unsalted	30/1 lb',
    'Cake Almond Toasted 10"	2/3.25 lb',
    'Cake Almond Toasted 10" 14 Slice	2/4 Lb',
    'Cake Caramel Pecan Fudge	2/ 3.5 lb',
    'Cake Caramel Pecan Fudge	2/3.5 Lb / 14 S',
    'Cake Carrot Skyscraper 10"	1/11 lb',
    'Cake Choc Fudge Skyscraper 10"	1/12 lb',
    'Cake Choc Gluten Free 10"	2/4 lb / 14 Sl.',
    'Cake Choc Gluten Free Ct 10"	2/4 Lb / 14 Sl',
    'Cake Hazelnut Mousse 10"	2/4 lbs',
    'Cake Hazelnut Mousse 10" 14 Slice	2/4 Lb',
    'Cake Lava Large 12 ct	1/4 lb',
    'Cake Lava Mini 20 ct	1/3 lb 3 oz',
    'Cake Limoncello Mascarpone	Case',
    'Cake Limoncello Mascarpone	2/3.5 Lb',
    'Cake Mixed Berry 10"	Case',
    'Cake Mixed Berry 10" 14 Slice	2/3.5 Lb',
    'Cake Oreo Mousse 10"	2/3.5 lb',
    'Cake Oreo Mousse 10" 14 Slice	2/3.5 Lb',
    'Cake Tiramisu Tray	2/4.25 lb',
    'Cake Tiramisu Tray	2/3.5 Lb',
    'Cereal Corn Flakes Juice Swt 6/26.4	6/26.4 Ounce',
    'Cheese Alejandro Mexican Shredded	4/5 lb',
    'Cheese Blue Monforte Crumbles	20 lb',
    'Cheese Burrata Alla Panna	12/4 oz',
    'Cheese Cheddar Mild Shred Feather	4/5 lb',
    'Cheese Fontina Wheel	10 lb avg',
    'Cheese MJ/Ched Fcy Shred	4/5 lb',
    'Cheese MontJack,Oaxaca/Cotija Blend	4/5 lb',
    'Cheese Mozzarella Shredded	4/5 lb',
    'Cheese Parmesan Shaved	4/5 lb',
    'Cheese Pecorino Romano Shaved	2/5 lb',
    'Cheese Pizza 4 Blend Shredded	4/5 lb',
    'Cheese Soy Non Hydrogenated 30#	30 LB',
    'Cheese Swiss Shredded Feather	4/5 lb',
    'Cheesecake Chocolate Swirl	12/30 oz',
    'Cheesecake Italian 10"	2/4 LB',
    'Cheesecake Italian 10"	2/4 lb',
    'Cheesecake NY Style	12/30 oz',
    'Cheesecake Plain 10" Sliced	2/6 lb',
    'Cheesecake Plain 12" Carnegie	4 ct',
    'Cheesecake Pumpkin Swirl	12/30 oz',
    'Cheesecake Strawberry Swirl	12/30 oz',
    'Chicken Empanada	100 ct',
    'Chicken Hibachi	1/100 ct',
    'Chicken Pwdr Asian N/MSG	6/3 lb',
    'Chicken Sesame Skewer	50 ct',
    'Chicken Stk Clar Concen	1/40 lb',
    'Chicken Stock Clarified Concentrate	12/1 lb',
    'Chicken Wellington Mini	1/100 ct',
    'Chocolate Couverture Classic 55%	4/11 LB',
    'Chocolate Batons 44% Cacao Noel	1/3.5 lb',
    'Chocolate Couv Royal 64%	4/11 lb',
    'Chocolate Couverture Blanc 30% Bulk	1/55.1 lb',
    'Chocolate Couverture Milk 35% Noel	1/11 lb',
    'Chocolate Grand 58% Bitterswt Noel	1/55 lb',
    'Chorizo Sausage Uncooked Smoke Flvr	1/10 lb',
    'Coconut Orginial Milk 6/64oz	6/64oz',
    'Compote Assorted Red Fruits	2/5.5 lb',
    'Cookie Mix Bee Sting Florentine	10/21 oz',
    'Cool Spray - Decomuse	12/10 oz',
    'Cottage Cheese Lowfat	2/5 lb',
    'Coulis Raspberry Ravifruit	6/1.1 lb',
    'Crab Cakes Jumbo	50/ 1 oz',
    'Crab Rangoon	100 ct',
    'Cream Aero Whip Topp 14 Oz.	12/14 oz',
    'Cream Half & Half	400 ct/case',
    'Cream Half & Half Fr Vanilla	400 ct/case',
    'Cream Half & Half Quart	16/1 Quart',
    'Cream Heavy Whip	9/ 1/2 Gallons',
  ]

}
