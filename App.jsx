import HoverCarousel from './hovercarousel';
import { useEffect, useState } from 'react';
const App = ({scrollhandeler,section1,section2,section3,section4,section5,section6,ho,ha}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const url='http://localhost:3000/myprojects?'
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const myprojects = await response.json();
          setData(myprojects);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array means this useEffect runs once when the component mounts
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

return ( <div className='section1' ref={section1}>

<HoverCarousel data={data} />

  
</div>)
}
export default App;

