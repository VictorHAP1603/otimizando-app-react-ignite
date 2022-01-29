import { useState } from "react";
import { Button } from "./Button";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  buttonClickCallback
}: SideBarProps) {
  const [value, setValue] = useState("")


  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            iconName={genre.name}
            selected={selectedGenreId === genre.id}
            onClick={() => buttonClickCallback(genre.id)}
            title={genre.title}
          />
        ))}
      </div>

    </nav>
  )
}