import data from './data.json';

export default function Map() {
  return (
    <div>
      <style>
        {`
        .country {
          transition: fill 0.25s;
        }
        .country:hover {
          fill: green;
        }
        `}
      </style>
      <svg xmlns="http://www.w3.org/2000/svg" height="90%" viewBox="0 0 1010 666">
        <g>
          {data.map((item) => (
            <path className="country" key={item.code} d={item.d} fill="#f6f6f6" stroke="#777" strokeWidth={0.2} />
          ))}
        </g>
      </svg>
    </div>
  );
}
