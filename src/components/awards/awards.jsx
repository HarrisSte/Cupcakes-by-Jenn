import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { Container, Row } from 'react-bootstrap';

import 'react-vertical-timeline-component/style.min.css';
import './awards.css';

import awardImg from '../../assets/birthday.jpg';

const award = [
  {
    img: awardImg,
    title: 'awards',
    year: '2023',
    category: '',
    cupcake: '',
    description: 'This is where a description lives',
  },
  {
    img: awardImg,
    title: 'awards',
    year: '2022',
    category: '',
    cupcake: '',
    description: 'This is where a description lives',
  },
  {
    img: awardImg,
    title: 'awards',
    year: '2021',
    category: '',
    cupcake: '',
    description: 'This is where a description lives',
  },
  {
    img: awardImg,
    title: 'awards',
    year: '2019',
    category: '',
    cupcake: '',
    description: 'This is where a description lives',
  },
];

function Award() {
  return (
    <Container>
      <Row className='award-history'>
        <h1>Jenn's Journey...</h1>
        <h3>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ab, repudiandae! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Accusamus corrupti eius harum ad neque
          non cumque, provident tempore reiciendis porro repellat, mollitia,
          voluptatem odit ipsam.
        </h3>
      </Row>
      <VerticalTimeline className='timeline-container'>
        {award.map((award, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--work'
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            iconStyle={{ background: '#922f44', color: '#4c5359' }}
          >
            <h1 className='vertical-timeline-element-title'>{award.year}</h1>
            <img src={award.img} />
            <h4 className='vertical-timeline-element-subtitle'>
              {award.description}
            </h4>
            <p>{award.category}</p>
            <p>{award.cupcake}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
}

export default Award;

// import { Container, Row, Col } from 'react-bootstrap';
// import './awards.css';

// function Awards() {
//   const awardInfo = [
//     {
//       year: '2023',
//       awards: [
//         {
//           title: 'Honorable Mention',
//           items: [
//             {
//               title: 'Always Room for Dessert',
//               content: 'Apple Pie',
//             },
//           ],
//         },
//         {
//           title: 'Overall',
//           items: [
//             {
//               title: 'Iowa Orchard',
//               content: 'Apple Pie',
//             },
//           ],
//         },
//         {
//           title: '1st',
//           items: [
//             {
//               title: 'Apple Dessert',
//               content: 'Apple Pie',
//             },
//             {
//               title: 'Iowa Orchard',
//               content: 'Apple Pie',
//             },
//           ],
//         },
//         {
//           title: '3rd',
//           items: [
//             {
//               title: 'Splenda Low to No Sugar Showdown',
//               content: 'Key Lime Pie',
//             },
//             {
//               title: 'Anything Goes, Everything Goes',
//               content: 'Orange Creamcicle',
//             },
//             {
//               title: 'Breakfast Cake',
//               content: 'Banana Nut French Toast',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       year: '2022',
//       awards: [
//         {
//           title: 'Overall',
//           items: [
//             {
//               title: 'Bacon, Bacon, Bacon',
//               content: 'Chocolate Caramel Bacon',
//             },
//           ],
//         },
//         {
//           title: '1st',
//           items: [
//             {
//               title: 'Bacon, Bacon, Bacon',
//               content: 'Chocolate Caramel Bacon',
//             },
//             {
//               title: 'Breast Cancer',
//               content: 'Strawberry Crunch',
//             },
//           ],
//         },
//         {
//           title: '2nd',
//           items: [
//             {
//               title: 'Hyvee cake',
//               content: 'Cherry Almond',
//             },
//           ],
//         },
//         {
//           title: '3rd',
//           items: [
//             {
//               title: 'Always Room for Dessert',
//               content: 'Apple Cider',
//             },
//             {
//               title: "Iowa's Big Four",
//               content: 'Chocolate Caramel Bacon',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       year: '2021',
//       awards: [
//         {
//           title: '3rd',
//           items: [
//             {
//               title: 'Nostalgic',
//               content: 'German Chocolate',
//             },
//           ],
//         },
//       ],
//     },
//     {
//       year: '2019',
//       awards: [
//         {
//           title: '2nd',
//           items: [
//             {
//               title: 'Innovative Chocolate',
//               content: 'Spicy Mexican Hot Chocolate',
//             },
//             {
//               title: "Iowa's Big Four",
//               content: 'Maple Bacon Breakfast',
//             },
//             {
//               title: 'Create a Winner with Gurleys',
//               content: 'Banana Nut French Toast',
//             },
//           ],
//         },
//         {
//           title: '3rd',
//           items: [
//             {
//               title: 'Best Templeton Rye Dessert',
//               content: 'Whiskey Smash',
//             },
//             {
//               title: 'Beginners Contest',
//               content: 'Carrot Cake',
//             },
//           ],
//         },
//       ],
//     },
//   ];
