import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import { useState } from 'react';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar setSelectedGenre={setSelectedGenre}/>
      <Content selectedGenre={selectedGenre}/>
    </div>
  )
}