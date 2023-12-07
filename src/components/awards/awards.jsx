// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from 'react-vertical-timeline-component';

// import 'react-vertical-timeline-component/style.min.css';
// import './awards.css';

// import awardImg from '../../assets/birthday.jpg';

// function Awards() {
//   return (
//     <VerticalTimeline className='timeline-container'>
//       <VerticalTimelineElement
//         className='vertical-timeline-element--work'
//         contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//         contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//         date='2011 - present'
//         iconStyle={{ background: '#922f44', color: '#4c5359' }}
//       >
//         <h3 className='vertical-timeline-element-title'>
//           Lorem ipsum dolor sit amet.
//         </h3>
//         {/* <img src={awardImg}></img> */}
//         <h4 className='vertical-timeline-element-subtitle'>
//           Lorem, ipsum dolor.
//         </h4>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
//           aliquid?
//         </p>
//       </VerticalTimelineElement>
//     </VerticalTimeline>
//   );
// }

// export default Awards;

import { Container, Row, Col } from 'react-bootstrap';
import './awards.css';

function Awards() {
  const awardInfo = [
    {
      year: '2023',
      awards: [
        {
          title: 'Honorable Mention',
          items: [
            {
              title: 'Always Room for Dessert',
              content: 'Apple Pie',
            },
          ],
        },
        {
          title: 'Overall',
          items: [
            {
              title: 'Iowa Orchard',
              content: 'Apple Pie',
            },
          ],
        },
        {
          title: '1st',
          items: [
            {
              title: 'Apple Dessert',
              content: 'Apple Pie',
            },
            {
              title: 'Iowa Orchard',
              content: 'Apple Pie',
            },
          ],
        },
        {
          title: '3rd',
          items: [
            {
              title: 'Splenda Low to No Sugar Showdown',
              content: 'Key Lime Pie',
            },
            {
              title: 'Anything Goes, Everything Goes',
              content: 'Orange Creamcicle',
            },
            {
              title: 'Breakfast Cake',
              content: 'Banana Nut French Toast',
            },
          ],
        },
      ],
    },
    {
      year: '2022',
      awards: [
        {
          title: 'Overall',
          items: [
            {
              title: 'Bacon, Bacon, Bacon',
              content: 'Chocolate Caramel Bacon',
            },
          ],
        },
        {
          title: '1st',
          items: [
            {
              title: 'Bacon, Bacon, Bacon',
              content: 'Chocolate Caramel Bacon',
            },
            {
              title: 'Breast Cancer',
              content: 'Strawberry Crunch',
            },
          ],
        },
        {
          title: '2nd',
          items: [
            {
              title: 'Hyvee cake',
              content: 'Cherry Almond',
            },
          ],
        },
        {
          title: '3rd',
          items: [
            {
              title: 'Always Room for Dessert',
              content: 'Apple Cider',
            },
            {
              title: "Iowa's Big Four",
              content: 'Chocolate Caramel Bacon',
            },
          ],
        },
      ],
    },
    {
      year: '2021',
      awards: [
        {
          title: '3rd',
          items: [
            {
              title: 'Nostalgic',
              content: 'German Chocolate',
            },
          ],
        },
      ],
    },
    {
      year: '2019',
      awards: [
        {
          title: '2nd',
          items: [
            {
              title: 'Innovative Chocolate',
              content: 'Spicy Mexican Hot Chocolate',
            },
            {
              title: "Iowa's Big Four",
              content: 'Maple Bacon Breakfast',
            },
            {
              title: 'Create a Winner with Gurleys',
              content: 'Banana Nut French Toast',
            },
          ],
        },
        {
          title: '3rd',
          items: [
            {
              title: 'Best Templeton Rye Dessert',
              content: 'Whiskey Smash',
            },
            {
              title: 'Beginners Contest',
              content: 'Carrot Cake',
            },
          ],
        },
      ],
    },
  ];

  const renderAwards = (year, awards) => {
    return (
      <Container key={year} className='award-info'>
        <Row>
          <Col>
            <div className='award-container'>
              <h2 className='award-title'>
                {year.split('').map((digit, index) => (
                  <span
                    key={index}
                    className={`title-word title-word-${index + 1}`}
                  >
                    {digit}
                  </span>
                ))}
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          {awards.map((award, index) => (
            <Col key={index}>
              <h3>{award.title}</h3>
              {award.items.map((item, itemIndex) => (
                <p key={itemIndex}>
                  <b>{item.title}</b>
                  <br></br>
                  {item.content}
                </p>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

  return <>{awardInfo.map(({ year, awards }) => renderAwards(year, awards))}</>;
}

export default Awards;
