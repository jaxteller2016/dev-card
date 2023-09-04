import './styles.css';

const data = {
  description:
    'Full stack web developer and cryptocurrency enthusiast. When not coding or learning Web3 development I like to play video games with my friends, riding my bike to the city or cook (and eat). I also enjoy the sun and having a cocktail on the beach or at the pool ;)',
  name: 'Sorin Craciunescu',
  skills: [
    { skillName: 'HTML + CSS', level: 'advanced', id: 1, color: '#2662E9' },
    { skillName: 'JavaScript', level: 'advanced', id: 2, color: '#EED917' },
    { skillName: 'Web Design', level: 'intermediate', id: 3, color: '#C1DCAC' },
    {
      skillName: 'Git and Github',
      level: 'intermediate',
      id: 4,
      color: '#E84F32'
    },
    { skillName: 'React', level: 'advanced', id: 5, color: '#5EDAF7' },
    { skillName: 'Svelte', level: 'beginner', id: 6, color: '#FD3900' },
    { skillName: 'Solidity', level: 'intermediate', id: 7, color: '#C6C1D8' }
  ]
};

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro data={data} />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList data={data} />
      </div>
    </div>
  );
}

function Avatar() {
  return <img style={{ maxWidth: '100%' }} src='me.jpg' alt='Developer' />;
}

function Intro({ data }) {
  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </>
  );
}

function SkillList({ data }) {
  return (
    <ul className='skill-list'>
      {data.skills.map((skill) => (
        <Skill skill={skill} key={skill.id} />
      ))}
    </ul>
  );
}

function Skill({ skill }) {
  return (
    <li style={{ backgroundColor: skill.color }} className='skill'>
      {(skill.level === 'advanced' && skill.skillName + '💪🏼') ||
        (skill.level === 'intermediate' && skill.skillName + '👍🏼') ||
        (skill.level === 'beginner' && skill.skillName + '👶🏼')}
    </li>
  );
}

export default App;
