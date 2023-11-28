interface VectorIconProps {
  direction: 'left' | 'right';
}

const VectorIcon: React.FC<VectorIconProps> = ({ direction }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='5rem'
    height='5rem'
    viewBox='0 0 80 80'
    fill='none'
    transform={`${direction === 'right' ? 'rotate(-180)' : ''}`}
  >
    <circle cx='40' cy='40' r='40' fill='#D9D9D9' />
    <rect
      width='2.20452'
      height='24.2497'
      rx='1.10226'
      transform='matrix(0.74877 0.66283 -0.74877 0.66283 44.3496 24)'
      fill='white'
    />
    <rect
      width='2.20452'
      height='23.7263'
      rx='1.10226'
      transform='matrix(0.74877 -0.66283 0.74877 0.66283 26 40.2734)'
      fill='white'
    />
  </svg>
);

export default VectorIcon;
