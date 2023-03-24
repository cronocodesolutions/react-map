import Box from '@cronocode/react-box';
import data from './data.json';

export default function Map() {
  return (
    <Box position="relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1010 666">
        <g>
          {data.map((item) => (
            <path key={item.code} d={item.d} fill="#f6f6f6" stroke="#777" strokeWidth={0.2} />
          ))}
        </g>
      </svg>
    </Box>
  );
}
