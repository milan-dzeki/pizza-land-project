import ceoImg from '../../images/about/management/ceo.jpg';
import managerImg from '../../images/about/management/manager.jpg';
import hrImg from '../../images/about/management/hr.jpeg';
import investorImg from '../../images/about/management/investor.jpg';

const initalState = {
  managementPeople: [
    {
      id: "ceo",
      imageUrl: `${ceoImg}`,
      caption: "Mark Lander - executive CEO",
      link: "/about/management/ceo",
      biography: "Mark Lander was born in 8.8.1984. year as an oldest son in the family. Even as a young boy, his leadership skills become evident. He was spontaneously organizing the life around himc. Other kids, and even his parents were relying on him, since his intelligence was evidently very high. He finished high school in 1 year and college in 2 years. After that, he inherited the Pizza Land from his father and devoted some of his time to it. Since he is very effective in work, Pizza Land is only a fraction of his overall businness empire. He is one of the richest people in the country, holding numerous acknowledgements due to giving money to charity.",
      highSchool: "High school for business",
      college: "Faculty of financies and profit making",
      address: "2345 Capital Cash",
      phone: "666-4324",
      email: "mark.lander@money.com",
      additionalEducation: [
        {
          id: "ceo-add-1",
          name: "Efficient leadership course"
        },
        {
          id: "ceo-add-2",
          name: "Managing the company course"
        },
        {
          id: "ceo-add-3",
          name: "Occult sciences initiation"
        },
        {
          id: "ceo-add-4",
          name: "Succed in capital - intensive course"
        },
      ]
    },
    {
      id: "manager",
      imageUrl: `${managerImg}`,
      caption: "Melinda Mitchell - manager in charge",
      link: "/about/management/manager",
      biography: "Melinda was born in 6.6.1966. year as the youngest child in family. She was very bright kid and good with organizing money. At age of eight, she calculated her way out of financial crisis and rose her family out of the bankrupt. They recognized her talents and directed her to economy.",
      highSchool: "Economies and business high school",
      college: "Bank college",
      address: "332 Bank Hill",
      phone: "445-556",
      email: "melinda.banking@cash.com",
      additionalEducation: [
        {
          id: "manager-add-1",
          name: "Organization and administration course"
        },
        {
          id: "manager-add-2",
          name: "Effective banking course"
        },
        {
          id: "manager-add-3",
          name: "Managing financies course"
        },
      ]
    },
    {
      id: "hr",
      imageUrl: `${hrImg}`,
      caption: "Lucille Brian - human resources",
      link: "/about/management/hr",
      biography: "Lucille was born in 1.2.1990. She was not the brightest kid, but she was always warm-hearted - always there to the people in need. From the very young age, she was helping her classmates with hall kinds of problems, and was a good listener. Even though she struggled to finish education, she eventually made it.",
      highSchool: "High school for sociology",
      college: "Social sciences",
      address: "3332 Random St",
      phone: "111-222",
      email: "luccile.brian@hr.com",
      additionalEducation: [
        {
          id: "hr-add-1",
          name: "Reading people course"
        },
        {
          id: "hr-add-2",
          name: "Human behaviour course"
        },
        {
          id: "hr-add-3",
          name: "Deep psychology course"
        },
      ]
    },
    {
      id: "investor",
      imageUrl: `${investorImg}`,
      caption: "Norman Reptillian - main investor",
      link: "/about/management/investor",
      biography: "Norman's date of birth is unknown. Actually all his biography is a mystery. He comes from dubious royal faimlly from China that has been asociated with numerous suspicious stories. All that is known is that he is a powerful investor whose wealth comes from his rich family.",
      highSchool: "unknown",
      college: "unknown",
      address: "All over the globe",
      phone: "unknown",
      email: "unknown",
      additionalEducation: [
        {
          id: "investor-add-1",
          name: "unknown"
        },
      ]
    }
  ]
};

const reducer = (state = initalState, action) => {
  return state;
};

export default reducer;