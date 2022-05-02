import React from 'react';
import './memories.css'
import memories1 from '../../../images/memories.png';
import Memory from '../Memory/Memory';

const memories = [
  {
    id: 1,
    name: "Memories made in food",
    description:
      "Our eclectic menu reflects the wide variety of influences and experiences that inform our approach to cooking. We don’t just serve dishes, we serve memories.", img: memories1,
  },
];

const Memories = () => {
    return (
        <div className='mt-5'>
            <div className='memories-container'>
                {
                    memories.map(memory => <Memory
                    key={memory.id}
                    memory={memory}
                    ></Memory>)
                }
            </div>
        </div>
    );
};

export default Memories;