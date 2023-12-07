// import { Container, Row, Col } from 'react-bootstrap';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import './awards.css';

function Contact() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date='2011 - present'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     
      >
        <h3 className='vertical-timeline-element-title'>Creative Director</h3>
        <h4 className='vertical-timeline-element-subtitle'>Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='2010 - 2011'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
     
      >
        <h3 className='vertical-timeline-element-title'>Art Director</h3>
        <h4 className='vertical-timeline-element-subtitle'>
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='2008 - 2010'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      
      >
        <h3 className='vertical-timeline-element-title'>Web Designer</h3>
        <h4 className='vertical-timeline-element-subtitle'>Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        date='2006 - 2008'
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
       
      >
        <h3 className='vertical-timeline-element-title'>Web Designer</h3>
        <h4 className='vertical-timeline-element-subtitle'>
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--education'
        date='April 2013'
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
       
      >
        <h3 className='vertical-timeline-element-title'>
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--education'
        date='November 2012'
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
       
      >
        <h3 className='vertical-timeline-element-title'>
          Agile Development Scrum Master
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--education'
        date='2002 - 2006'
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
       
      >
        <h3 className='vertical-timeline-element-title'>
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  
      />
    </VerticalTimeline>
  );
}

export default Contact;

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

//   const renderAwards = (year, awards) => {
//     return (
//       <Container key={year} className='award-info'>
//         <Row>
//           <Col>
//             <div className='award-container'>
//               <h2 className='award-title'>
//                 {year.split('').map((digit, index) => (
//                   <span
//                     key={index}
//                     className={`title-word title-word-${index + 1}`}
//                   >
//                     {digit}
//                   </span>
//                 ))}
//               </h2>
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           {awards.map((award, index) => (
//             <Col key={index}>
//               <h3>{award.title}</h3>
//               {award.items.map((item, itemIndex) => (
//                 <p key={itemIndex}>
//                   <b>{item.title}</b>
//                   <br></br>
//                   {item.content}
//                 </p>
//               ))}
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     );
//   };

//   return <>{awardInfo.map(({ year, awards }) => renderAwards(year, awards))}</>;
// }

// export default Awards;
