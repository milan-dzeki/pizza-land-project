//pizza makers photos
import PizzaMakerOne from '../../images/about/employees/makers/pizza-maker-1.jpg';
import PizzaMakerTwo from '../../images/about/employees/makers/pizza-maker-2.jpg';
import PizzaMakerThree from '../../images/about/employees/makers/pizza-maker-3.jpg';
import PizzaMakerFour from '../../images/about/employees/makers/pizza-maker-4.jpg';
//delivery people photos
import DeliveryOne from '../../images/about/employees/delivery/delivery-1.jpg';
import DeliveryTwo from '../../images/about/employees/delivery/delivery-2.jpg';
import DeliveryThree from '../../images/about/employees/delivery/delivery-3.jpg';
import DeliveryFour from '../../images/about/employees/delivery/delivery-4.png';
//sellers photos
import SellerOne from '../../images/about/employees/sellers/seller-1.jpg';
import SellerTwo from '../../images/about/employees/sellers/seller-2.jpg';
import SellerThree from '../../images/about/employees/sellers/seller-3.jpg';
//nutritionists photos
import NutritionistOne from '../../images/about/employees/nutritionists/nutritionist-1.jpg';
import NutritionistTwo from '../../images/about/employees/nutritionists/nutritionist-2.jpg';

const initialState = {
  employees: {
    makers: [
      {
        id: "maker-1",
        classname: "employees__person",
        name: "Granpa Bob",
        job: "pizza maker",
        speciality: "cooking",
        slideElementClassname: "maker-slide",
        bio: "Born in 1950, he is our oldest member, so we all call him 'granpa elder'. Bob is a serious dude though. He is the kitchen chief and main recruiter for new pizza makers.",
        imageUrl: PizzaMakerOne,
        clicked: false
      },
      {
        id: "maker-2",
        classname: "employees__person",
        name: "Boozey Jonhson",
        job: "pizza maker",
        speciality: "cutting salad",
        slideElementClassname: "maker-slide",
        bio: "Boozey is our best pizza maker. Even though he is so slow, when he finally make the pizza, you can't believe how good it is. He is an educator for new employees.",
        imageUrl: PizzaMakerTwo,
        clicked: false
      },
      {
        id: "maker-3",
        classname: "employees__person",
        name: "Senore Benito",
        job: "pizza maker",
        speciality: "spicing",
        slideElementClassname: "maker-slide",
        bio: "BEnito comes from Itally. He loves making making pizzas! He learned from secret itallian pizza making masters who hides in catacobmes under Rome.",
        imageUrl: PizzaMakerThree,
        clicked: false
      },
      {
        id: "maker-4",
        classname: "employees__person",
        name: "Happy Joe",
        job: "pizza maker",
        speciality: "shrooms",
        slideElementClassname: "maker-slide",
        bio: "Joe is the happiest guy in the firm. He always smiles and customers just love him - especially women. As far as the pizza making is concerned, he has subtle taste for vegan pizzas.",
        imageUrl: PizzaMakerFour,
        clicked: false
      }
    ],
    delivery: [
      {
        id: "delivery-1",
        classname: "employees__person",
        name: "Thomas Brian",
        job: "delivery guy",
        speciality: "cars",
        slideElementClassname: "delivery-slide",
        bio: "Brian delivers pizzas at lightning speeds. The only issue is that he has fast metabolism so he sometimes eat half of the pizza on his way to the customer. But because he is super fast and he doesn't always eat the pizzas, we keep him working but with care.",
        imageUrl: DeliveryOne,
        clicked: false
      },
      {
        id: "delivery-2",
        classname: "employees__person",
        name: "John Joe",
        job: "delivery guy",
        speciality: "getting lost",
        slideElementClassname: "delivery-slide",
        bio: "Joe has been in our firm longer that any other member. He is professional driver, so he delivers at lightning speeds",
        imageUrl: DeliveryTwo,
        clicked: false
      },
      {
        id: "delivery-3",
        classname: "employees__person",
        name: "Goodneighbour Mark",
        job: "delivery guy",
        speciality: "motocycle",
        slideElementClassname: "delivery-slide",
        bio: "Mark is a motocycle expert and he knows his way around the city, so he is lightning fast delivery guy. He educates our new delivery guys, showing the all the shortcuts in secret alleys.",
        imageUrl: DeliveryThree,
        clicked: false
      },
      {
        id: "delivery-4",
        classname: "employees__person",
        name: "Bomby Dirk",
        job: "delivery guy",
        speciality: "explosives",
        slideElementClassname: "delivery-slide",
        bio: "Dirk is just a regular delivery guy. He is explosive expert though, so you should watch out for you delivery package - it might be a surprise.",
        imageUrl: DeliveryFour,
        clicked: false
      }
    ],
    sellers: [
      {
        id: "seller-1",
        classname: "employees__person",
        name: "Halley Lucy",
        job: "pizza selling",
        speciality: "financies",
        slideElementClassname: "seller-slide",
        bio: "Lucy is our customers' favourite seller. She is always in a good mood, ready to crack a joke. ",
        imageUrl: SellerOne,
        clicked: false
      },
      {
        id: "seller-2",
        classname: "employees__person",
        name: "Doe Briana",
        job: "pizza selling",
        speciality: "getting customers",
        slideElementClassname: "seller-slide",
        bio: "Briana is part-time pizza seller, part-time deliverer. She delivers pizzas on the address, and, if requested, hang out with our customers until their appetite is satisfied. Mostly everyone loves Briana.",
        imageUrl: SellerTwo,
        clicked: false
      },
      {
        id: "seller-3",
        classname: "employees__person",
        name: "Nerdy Melissa",
        job: "pizza selling",
        speciality: "fast serving",
        slideElementClassname: "seller-slide",
        bio: "Melissa is as straightforward worker as it gets - she is the most professional person in our company. That's why she is highly paid.",
        imageUrl: SellerThree,
        clicked: false
      }
    ],
    nutritionists: [
      {
        id: "nutritionist-1",
        classname: "employees__person",
        name: "Scarlett Doe",
        job: "nutritionist",
        speciality: "weight loss",
        slideElementClassname: "nutritionist-slide",
        bio: "Scarlett is our nutritionist that suggest pizza types to customers who want to loose their weight.",
        imageUrl: NutritionistOne,
        clicked: false
      },
      {
        id: "nutritionist-2",
        classname: "employees__person",
        name: "Linda Know-it-all",
        job: "nutritionist",
        speciality: "all about nutrition",
        slideElementClassname: "nutritionist-slide",
        bio: "Linda knows all about nutrition. She is there for everyone, to offer professional diet plan and advice",
        imageUrl: NutritionistTwo,
        clicked: false
      }
    ]
  }
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;