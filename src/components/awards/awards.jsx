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
    year: '2019',
    category: '2nd place	Innovative Chocolate	Spicy Mexican Hot Chocolate',
    cupcake: '',
    description:
      'In 2019, Cupcakes by Jenn debuted at the fair in over 10 competitions, and that first year was a disaster! Competing taught me valuable lessons. I learned to carefully track competition schedules—8 out of 10 days in 2019—and manage the challenges of baking daily while working my day job. Juggling up to 3 competitions some days, I realized they could be overwhelming. Additionally, I discovered the importance of closely following competition instructions; unfortunately, I was disqualified from 2 in 2019. Despite these hurdles, my first year was successful—I won 5 competitions.',
  },
  {
    img: awardImg,
    title: 'awards',
    year: '2020',
    category: '',
    cupcake: '',
    description:
      'In 2020, the world came to a halt, including the state fair, providing an extra year for planning. The competition list is released in May, and registration is open until July 1st. Fortunately, you only need to specify the number of competitions, not their names. Entry fees cover all selected competitions. The list contains crucial details like judging dates, rules, criteria, and prizes for over 125 competitions with 600+ categories. While only a few are dessert-eligible, my creative approach helps me identify 15-20 appealing options, making the selection process more manageable.',
  },
  {
    img: awardImg,
    title: 'awards',
    year: '2021',
    category: '',
    cupcake: '',
    description:
      'In 2021, the competition intensified as it appeared that everyone had picked up baking or cooking skills over the previous year. Despite entering 10 competitions, I only secured a placement in one, and the prize did not even cover the entry costs. It was a hit to my confidence after a successful debut year. However, I resolved not to give up easily and began planning for the next year.',
  },
  {
    img: awardImg,
    title: 'awards',
    year: '2022',
    category: '',
    cupcake: '',
    description: 'Information coming soon!',
  },
  {
    img: awardImg,
    title: 'awards',
    year: '2023',
    category: '',
    cupcake: '',
    description: 'Information coming soon!',
  },
];

function Award() {
  return (
    <Container>
      <Row className='award-history'>
        <h1>Jenn's Journey...</h1>
        <p>
          My journey into the world of cupcakes began at the state fair.
          Surrounded by the aroma of sugar and creativity, I'd wander through
          the baking competitions, admiring the edible masterpieces and
          thinking, "I could top that!" Years of this inspiration culminated in
          a bold decision in 2019: to enter the competition myself. <br></br>
          <br></br>
          From that delicious leap, a journey of delectable delight began, one I
          continue to love.
        </p>
      </Row>
      <VerticalTimeline className='timeline-container'>
        {award.map((award, index) => (
          <VerticalTimelineElement
            key={index}
            className='vertical-timeline-element--work'
            contentStyle={{ background: '#7b3b3b', color: '#fff' }}
            contentArrowStyle={{ borderRight: '14px solid  #743837' }}
            iconStyle={{ background: '#82667f' }}
          >
            <h1 className='vertical-timeline-element-title'>{award.year}</h1>
            <img src={award.img} alt='Image of a cupcake.' />
            <p className='vertical-timeline-element-subtitle'>
              {award.description}
            </p>
            <p>
              Competitions:<br></br> {award.category}
            </p>
            <p>{award.cupcake}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
}

export default Award;
