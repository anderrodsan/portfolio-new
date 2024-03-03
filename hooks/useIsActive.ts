import { useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react'

const useIsActive = (ref:React.RefObject<HTMLElement>, path: string) => {

  const router = useRouter();
  const isInView = useInView(ref);

  useEffect(() => {
      if (isInView){
          router.replace(path); 
      }
  }, [isInView])
  
  return null;
}

export default useIsActive