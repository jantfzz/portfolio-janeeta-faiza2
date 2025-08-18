import { useRef, useEffect, MouseEvent } from 'react';

interface UseMagneticHoverOptions {
  strength?: number;
  scale?: number;
  disabled?: boolean;
}

export const useMagneticHover = (options: UseMagneticHoverOptions = {}) => {
  const { strength = 0.3, scale = 1.05, disabled = false } = options;
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      element.style.setProperty('--x', `${deltaX}px`);
      element.style.setProperty('--y', `${deltaY}px`);
      element.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
    };

    const handleMouseLeave = () => {
      element.style.setProperty('--x', '0px');
      element.style.setProperty('--y', '0px');
      element.style.transform = 'translate(0px, 0px) scale(1)';
    };

    element.addEventListener('mousemove', handleMouseMove as any);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove as any);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, scale, disabled]);

  return elementRef;
};

export const use3DTilt = (options: { maxTilt?: number; disabled?: boolean } = {}) => {
  const { maxTilt = 15, disabled = false } = options;
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -maxTilt;
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * maxTilt;

      element.style.setProperty('--rx', `${rotateX}deg`);
      element.style.setProperty('--ry', `${rotateY}deg`);
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      element.style.setProperty('--rx', '0deg');
      element.style.setProperty('--ry', '0deg');
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    element.addEventListener('mousemove', handleMouseMove as any);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove as any);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, disabled]);

  return elementRef;
};
