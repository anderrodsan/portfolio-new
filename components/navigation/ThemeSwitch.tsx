"use client"

import * as React from 'react'
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react';

type Props = {
  
}

const ThemeSwitch: React.FC<Props> = ({}) => {

    const [mode, setMode] = React.useState<boolean>(true);
    const { setTheme } = useTheme();

    React.useEffect(() => {
        setTheme("dark");    
    }, []);

    const changeMode = () => {
        if (mode) {
            setTheme("light");
            setMode(false);
        } else {
            setTheme("dark");
            setMode(true);
        }
        
    }

  return (
    <div className='flex gap-2'>
        {mode ? (
            <Moon />
        ):(
            <Sun />
        )}
        <Switch 
            onClick={() => changeMode()}
        />
    </div>
  )
}

export default ThemeSwitch
